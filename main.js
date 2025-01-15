/**
 * The main file
 */

// Just hack to avoid Wrong MIME type error caused by loading tree sitter library
delete WebAssembly.instantiateStreaming;
const Parser = window.TreeSitter;

(async() => {
  if(typeof TREE_SITTER_WASM === "undefined" || TREE_SITTER_WASM === null) {
    await Parser.init();
  }
  else {
    await Parser.init({"wasmBinary" : TREE_SITTER_WASM});
  }
  await main();
})();

var dbg;
async function main(params) {
  const parser = new Parser();
  const languagePath = "tree-sitter-grammartcfg/tree-sitter-grammartcfg.wasm";
  const language = (typeof TREE_SITTER_CFG_WASM === 'undefined' || TREE_SITTER_CFG_WASM === null) ? languagePath : TREE_SITTER_CFG_WASM;
  console.log(language);
  const CFGLanguageGrammar = await Parser.Language.load(language);
  parser.setLanguage(CFGLanguageGrammar);

  let highlighter = new Highlighter("hght", $("#code-editor"));
  let linter = new Linter("lnt", $("#code-editor"));
  let formatter = new Formatter($("#code-editor"));
  let compiler = new Compiler();
  let interpreter = new Interpreter(new InitialCtx(250, 250, 10, "black", 0), $("#main-canvas"));

  $("#b1").click(() => {
    formatter.clearFormatting();
    let code = formatter.purifyString();
    const tree = parser.parse(code);

    let fmt = [ ...highlighter.highlight(tree, code), ...linter.lint(tree, code)];
    sortedFmt = fmt.sort(FormatTag.sort);
    formatter.format(sortedFmt, code);
  });
  $("#b3").click(() => {
    formatter.clearFormatting();
    let code = formatter.purifyString();
    const tree = parser.parse(code);
    console.log(compiler.compile(tree, code));
  });
  $("#b2").click(() => {
    //interpreter.drawSquare(new SymbolCtx(0, 0, 1, "black"), new Square(0, 0, 40, "black"));
    formatter.clearFormatting();
    let code = formatter.purifyString();
    interpreter.reset();
    interpreter.clear();
    const tree = parser.parse(code);
    const grammar = compiler.compile(tree, code);
    interpreter.setGrammar(grammar);
    interpreter.execute();
  });

  $("#code-editor").on("click", () => {
    let editor = $("#code-editor");
    let editorContent = editor.text();
    //console.log(document.getSelection());
  });

  var origLineNumber = null;
  function updateLineNumbering(lineNumber) {
    $("#line-numbering").html("");
    for (let line = 0; line <= lineNumber; line++) {
      $("#line-numbering").append(`<div class="lineno">${line + 1}</div>`)
    }

    origLineNumber = lineNumber;
  }

  $("#code-editor")[0].addEventListener("beforeinput", (e) => {
    const newlineRegexp = /((\r?\n)|<br>)/g;
    var extraNewlines = 0;
    var insertedText = "";

    if(origLineNumber === null) {
      const originalText = $("#code-editor").text();
      const originalNewlines = originalText.matchAll(newlineRegexp).toArray();
      extraNewlines = originalNewlines.length;
      origLineNumber = 0;
    }

    var affectedText = $("#code-editor").html().substring(
      e.getTargetRanges()[0].startOffset,
      e.getTargetRanges()[0].startOffset > e.getTargetRanges()[0].endOffset ? e.getTargetRanges()[0].startOffset + e.getTargetRanges()[0].endOffset : e.getTargetRanges()[0].endOffset
    );
    const deletedNewlines = affectedText.matchAll(newlineRegexp).toArray();
    extraNewlines -= deletedNewlines.length;

    if(e.inputType == "insertFromPaste") {
      e.dataTransfer.items[0].getAsString((data) => {
        const pastedTextRegexp = /<!--StartFragment-->(.*)<!--EndFragment-->/gsi;
        const pastedText = data.match(pastedTextRegexp);
        const pastedNewlines = pastedText[0].matchAll(newlineRegexp).toArray();
        extraNewlines += pastedNewlines.length;

        if(extraNewlines != 0) {
          updateLineNumbering(origLineNumber + extraNewlines);
        }

        $("#code-editor")[0].normalize();
      });

      return;
    }
    else if(e.inputType == "insertParagraph") {
      insertedText = "\n";
    }
    else if(e.inputType == "insertText") {
      insertedText = e.data;
    }

    const newNewlines = insertedText.matchAll(newlineRegexp).toArray();
    extraNewlines += newNewlines.length;
    if(extraNewlines != 0) {
      updateLineNumbering(origLineNumber + extraNewlines);
    }
  });
}

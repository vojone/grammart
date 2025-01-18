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
  const CFGLanguageGrammar = await Parser.Language.load(language);
  parser.setLanguage(CFGLanguageGrammar);

  let codeEditor = new CodeEditor($("#code-editor"), $("#line-numbering"), parser);
  codeEditor.init();

  let compiler = new Compiler();
  let interpreter = new Interpreter(new InitialCtx(250, 250, 10, "black", 0), $("#main-canvas"));

  $("#b1").click(() => {
    codeEditor.formatCode();
  });
  $("#b3").click(() => {
    let code = codeEditor.getCode();
    const tree = parser.parse(code);
    console.log(compiler.compile(tree, code));
  });
  $("#b2").click(() => {
    //interpreter.drawSquare(new SymbolCtx(0, 0, 1, "black"), new Square(0, 0, 40, "black"));
    let code = codeEditor.getCode();
    interpreter.reset();
    interpreter.clear();
    const tree = parser.parse(code);
    const grammar = compiler.compile(tree, code);
    interpreter.setGrammar(grammar);
    interpreter.run();
    document.getElementById("code-editor").normalize();
  });

  $("#canvas-download").click(() => {
    downloadCanvasContent("main-canvas", "result", 500, 500);
  });

  $("#canvas-run").click(() => {
    interpreter.run();
  });

  $("#canvas-stop").click(() => {
    interpreter.stop();
  });

  $("#canvas-reset").click(() => {
    interpreter.reset();
    interpreter.clear();
  });

  $("#canvas-step").click(() => {
    interpreter.stop();
    interpreter.step();
  });
}

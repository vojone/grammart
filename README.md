# GrammArt
Simple clientside JS application for creating context free art using user defined grammar.

## How to develop

Initialize environment (`npm` needs to be installed first):

```
./init.sh
```

Generate the grammar for GrammArt language (subset of CFG):

```
cd tree-sitter-grammartcfg
npx tree-sitter-cli generate
npx tree-sitter build --wasm
```


## Third party dependencies

Content of *tree-sitter-grammarcfg* was partially generated by [tree-sitter-cli](https://tree-sitter.github.io/tree-sitter/creating-parsers/1-getting-started.html).

Other third party code and modules are placed in the *deps* directory:

**Tree-sitter** - *tree-sitter.js*, *tree-sitter.wasm* - Tree-sitter JS bindings ([https://github.com/tree-sitter/tree-sitter/tree/master/lib/binding_web](https://github.com/tree-sitter/tree-sitter/tree/master/lib/binding_web))

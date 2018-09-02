const fs = require("fs");
const antlr = require("antlr4");

// ANTLR stuff
const Lexer = require("./out/grammars-v4/objc/one-step-processing/ObjectiveCLexer")
  .ObjectiveCLexer;
const Parser = require("./out/grammars-v4/objc/ObjectiveCParser")
  .ObjectiveCParser;
const Listener = require("./out/grammars-v4/objc/ObjectiveCParserListener")
  .ObjectiveCParserListener;

const demo = fs.readFileSync(
  "./EarlGrey/EarlGrey/Matcher/GREYMatchers.m",
  "utf-8"
);

const chars = new antlr.InputStream(demo);
const lexed = new Lexer(chars);
const tokens = new antlr.CommonTokenStream(lexed);
const parsed = new Parser(tokens);
parsed.buildParseTrees = true;
const tree = parsed.translationUnit();
const extractor = new Listener();

antlr.tree.ParseTreeWalker.DEFAULT.walk(extractor, tree);

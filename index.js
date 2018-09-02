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

JSListener = function () {
    Listener.call(this);
	return this;
}

JSListener.prototype = Object.create(Listener.prototype);
JSListener.prototype.constructor = JSListener;

JSListener.tFileName = "test"

JSListener.prototype.enterProgram = function(ctx) {
    console.log("enterProgram");
};

JSListener.prototype.exitProgram = function(ctx) {
    console.log("exitProgram");
};

JSListener.prototype.enterAssign = function(ctx) {
    console.log("enterAssign");
};

JSListener.prototype.exitAssign = function(ctx) {
    console.log("exitAssign");
};

JSListener.prototype.enterPrint = function(ctx) {
    console.log("enterPrint");
};

JSListener.prototype.exitPrint = function(ctx) {
    console.log("exitPrint");
};
const extractor = new JSListener();

antlr.tree.ParseTreeWalker.DEFAULT.walk(extractor, tree);

// Tutorial: https://www.scriptol.com/programming/antlr4-javascript.php

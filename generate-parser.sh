#!/bin/bash

rm -rf ./out
mkdir out
antlr4 -o ./out -Dlanguage=JavaScript grammars-v4/objc/one-step-processing/ObjectiveCLexer.g4
antlr4 -o ./out -Dlanguage=JavaScript -lib out/grammars-v4/objc/one-step-processing/ grammars-v4/objc/one-step-processing/ObjectiveCPreprocessorParser.g4

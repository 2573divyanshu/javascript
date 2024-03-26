// JRE have everything that we need to run JS
// JRE has:
// - js engine
// - web apis
// - event loop
// - macro and micro task queue

// JRE isn't possible about js engine

// browsers have different JRE

// Google Chome's JRE is V8

// JS engine is not a machine

// code goes through three steps: parsing , compilation , execution

// code is broken down into tokens 

// syntax parse takes the tokens and converts it into an AST

// interpretor is fast

// javascript can behave like interpreted language or an compiled language, depending upon the engine

// initially it was interpreted language

// but most modern browsers uses interpretor + compiler

// JIT compliation is best of the both world

// interpretor takes AST converts it into bytecode

// while interpretition compiler optimizes the code as much as it can

// execution isn't possible without memory heap and callstack

// garbage collector frees up the memory (it uses mark and sweep algorithm)

// other optimizations that compiler does: inlining , copy elision, inline caching

// v8's interpretor is called ignition
// v8's optimizing compiler is turbofan 
// v8's garbage collector orinoco and oilpan
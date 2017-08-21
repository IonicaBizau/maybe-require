"use strict";

const maybeRequire = require("../lib");

// foo.js
//   module.exports = 42

const foo = maybeRequire(`${__dirname}/foo.js`)
    , bar = maybeRequire(`${__dirname}/bar.js`)

console.log(foo)
// => 42

console.log(bar)
// => {}

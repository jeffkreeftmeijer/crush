#! /usr/bin/env node
const fs = require("fs");
const crush = require("..");
let input = fs.readFileSync("/dev/stdin").toString();

crush.crush(input).then(console.log);

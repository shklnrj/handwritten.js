#!/usr/bin/env node

const fs = require('fs');
const handwritten = require('./index.js');

const [, , ...args] = process.argv;

async function main(e) {
  try {
    const txt = String(fs.readFileSync(e));
    const output = await handwritten(txt);
    console.log("Success! Saved file as 'output.pdf'!");
    output.pipe(fs.createWriteStream('output.pdf'));
  } catch (err) {
    console.log(err);
  }
}

if (args.length > 1) {
  console.log(`Excess arguments were provided!\nNeeds 1 arguments but was provided with ${args.length}!`);
} else if (args.length < 1) {
  console.log(`Insufficient arguments were provided!\nNeeds 1 arguments but was provided with ${args.length}!`);
} else {
  main(args[0]);
}

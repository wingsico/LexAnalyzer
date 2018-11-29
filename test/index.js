const fs = require('fs');
const path = require('path');
const tokenizer = require('../index');

(function () {
  const programPath = path.resolve(__dirname, './program.txt');
  const program = fs.readFileSync(programPath, 'utf-8');
  const tokens = tokenizer(program);
  console.log(tokens);
})()

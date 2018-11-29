
function tokenizer(input) {
  let current = 0;

  let tokens = [];

  while (current < input.length) {
    let char = input[current];

    if (char === '(') {
      tokens.push({
        type: 'paren',
        value: '('
      })

      current++;
      continue;
    }

    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')'
      })

      current++;
      continue;
    }

    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    let NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {
      let value = '';
      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }

      tokens.push({
        type: 'number',
        value
      })

      continue;
    }

    let OPERATOR = /[\\+|\-|\\*|\/]/;
    if (OPERATOR.test(char)) {
      tokens.push({
        type: 'operator',
        value: char
      })

      current++;
      continue;
    }

    let LETTERS = /[a-zA-Z]/i;
    if (LETTERS.test(char)) {
      let value = '';

      while (LETTERS.test(char) || NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }

      tokens.push({ type: 'name', value });

      continue;
    }

    throw new TypeError('I dont know what this character is: ' + char + ', position: ' + current);
  }

  return tokens;
}

module.exports = tokenizer;

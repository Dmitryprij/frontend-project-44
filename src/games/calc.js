#!/usr/bin/env node

import basisOfGames from '../index.js';
import getRandomInt from '../getRandomInt.js';

const calc = () => {
  const noteToCalc = 'What is the result of the expression?';

  const taskCalc = () => {
    const number1 = getRandomInt(100);
    const number2 = getRandomInt(100);

    const signs = ['+', '-', '*'];
    const sign = signs[getRandomInt(2)];

    const question = `${number1} ${sign} ${number2}`;

    let result = 0;
    switch (sign) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      default:
        result = null;
    }

    result = result.toString();

    return [question, result];
  };

  basisOfGames(noteToCalc, taskCalc);
};

export default calc;
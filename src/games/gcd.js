#!/usr/bin/env node

import tekst from '../cli.js';
import { answerForm, checkAnswer } from '../index.js';
import { magicNumbers, getDivisor } from '../math.js';

const gcd = () => {
  const userName = tekst('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const x = magicNumbers();
    const y = magicNumbers();
    const ex = `${x} ${y}`;
    const userAnswer = answerForm(ex);
    const correctAnswer = getDivisor(x, y);

    if (!checkAnswer(userAnswer, correctAnswer, userName, i)) break;
  }
};

export default gcd;
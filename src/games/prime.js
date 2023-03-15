#!/usr/bin/env node

import tekst from '../cli.js';
import { answerForm, checkAnswer } from '../index.js';
import { magicNumbers, gitPrime } from '../math.js';

const prime = () => {
  const userName = tekst('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = magicNumbers();
    const userAnswer = answerForm(randomNumber, 'string');
    const correctAnswer = gitPrime(randomNumber);

    if (!checkAnswer(userAnswer, correctAnswer, userName, i)) break;
  }
};
export default prime;
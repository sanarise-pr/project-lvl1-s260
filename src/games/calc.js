import { randomIntInRange } from '../math';
import runGame from '..';

const gameRules = 'What is the result of the expression?';
const minNum = 0;
const maxNum = 99;

const createTask = () => {
  const num1 = randomIntInRange(minNum, maxNum);
  const num2 = randomIntInRange(minNum, maxNum);

  let question;
  let answer;
  const operatorNum = randomIntInRange(0, 2);
  switch (operatorNum) {
    case 0:
      question = `${num1} + ${num2}`;
      answer = num1 + num2;
      break;
    case 1:
      question = `${num1} - ${num2}`;
      answer = num1 - num2;
      break;
    case 2:
      question = `${num1} * ${num2}`;
      answer = num1 * num2;
      break;
    default:
  }
  return { question, answer: String(answer) };
};

export default () => runGame(gameRules, createTask);

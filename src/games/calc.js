import { randomIntInRange } from '../math';
import runGame from '..';

const GAME_RULES = 'What is the result of the expression?';
const MIN_NUM = 0;
const MAX_NUM = 99;

const createTask = () => {
  const num1 = randomIntInRange(MIN_NUM, MAX_NUM);
  const num2 = randomIntInRange(MIN_NUM, MAX_NUM);

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

export default () => runGame(GAME_RULES, createTask);

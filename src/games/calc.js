import { createGame } from '../game';
import { createTask } from '../task';
import { randomIntInRange } from '../math';
import runGame from '..';

const GAME_RULES = 'What is the result of the expression?';
const MIN_NUM = 0;
const MAX_NUM = 99;

export const game = createGame(GAME_RULES, () => {
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

  return createTask(question, String(answer));
});

export default () => runGame(game);

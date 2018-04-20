import { randomIntInRange, isEven } from '../math';
import runGame from '..';

const gameRules = 'Answer "yes" if number even otherwise answer "no".';
const minNum = 0;
const maxNum = 999;

const createTask = () => {
  const num = randomIntInRange(minNum, maxNum);
  return { question: num, answer: isEven(num) ? 'yes' : 'no' };
};

export default () => runGame(gameRules, createTask);

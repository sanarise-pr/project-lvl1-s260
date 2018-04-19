import { randomIntInRange, isEven } from '../math';
import runGame from '..';

const GAME_RULES = 'Answer "yes" if number even otherwise answer "no".';
const MIN_NUM = 0;
const MAX_NUM = 999;

const createTask = () => {
  const num = randomIntInRange(MIN_NUM, MAX_NUM);
  return { question: num, answer: isEven(num) ? 'yes' : 'no' };
};

export default () => runGame(GAME_RULES, createTask);

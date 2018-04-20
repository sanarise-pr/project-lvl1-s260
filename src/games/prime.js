import { randomIntInRange, isPrime } from '../math';
import runGame from '..';

const GAME_RULES = 'Is this number prime?';
const MIN_NUM = 1;
const MAX_NUM = 100;

export const createTask = () => {
  const num = randomIntInRange(MIN_NUM, MAX_NUM);
  return { question: `${num}`, answer: isPrime(num) ? 'yes' : 'no' };
};

export default () => runGame(GAME_RULES, createTask);

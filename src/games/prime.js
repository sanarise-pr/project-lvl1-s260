import { randomIntInRange, isPrime } from '../math';
import runGame from '..';

const gameRules = 'Is this number prime?';
const minNum = 1;
const maxNum = 100;

export const createTask = () => {
  const num = randomIntInRange(minNum, maxNum);
  return { question: `${num}`, answer: isPrime(num) ? 'yes' : 'no' };
};

export default () => runGame(gameRules, createTask);

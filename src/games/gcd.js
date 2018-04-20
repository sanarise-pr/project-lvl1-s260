import { randomIntInRange, gcd } from '../math';
import runGame from '..';

const gameRules = 'Find the greatest common divisor of given numbers.';
const minNum = 1;
const maxNum = 100;

export const createTask = () => {
  const num1 = randomIntInRange(minNum, maxNum);
  const num2 = randomIntInRange(minNum, maxNum);
  return { question: `${num1} ${num2}`, answer: String(gcd(num1, num2)) };
};

export default () => runGame(gameRules, createTask);

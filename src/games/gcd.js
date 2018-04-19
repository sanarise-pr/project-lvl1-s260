import { randomIntInRange, gcd } from '../math';
import runGame from '..';

const GAME_RULES = 'Find the greatest common divisor of given numbers.';
const MIN_NUM = 1;
const MAX_NUM = 100;

export const game = {
  rules: GAME_RULES,
  createTask: () => {
    const num1 = randomIntInRange(MIN_NUM, MAX_NUM);
    const num2 = randomIntInRange(MIN_NUM, MAX_NUM);
    return { question: `${num1} ${num2}`, answer: String(gcd(num1, num2)) };
  },
};

export default () => runGame(game);

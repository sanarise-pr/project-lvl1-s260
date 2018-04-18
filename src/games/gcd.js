import { createGame } from '../game';
import { createTask } from '../task';
import { randomIntInRange, gcd } from '../math';
import runGame from '..';

const GAME_RULES = 'Find the greatest common divisor of given numbers.';
const MIN_NUM = 1;
const MAX_NUM = 100;

export const game = createGame(GAME_RULES, () => {
  const num1 = randomIntInRange(MIN_NUM, MAX_NUM);
  const num2 = randomIntInRange(MIN_NUM, MAX_NUM);

  return createTask(`${num1} ${num2}`, gcd(num1, num2));
});

export default () => runGame(game);

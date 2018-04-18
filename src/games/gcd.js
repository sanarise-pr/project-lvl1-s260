import { createGame } from '../game';
import { createTask } from '../task';
import { randomIntInRange } from '../math';

const GAME_RULES = 'Find the greatest common divisor of given numbers.';
const MIN_NUM = 1;
const MAX_NUM = 100;

const calcGcd = (x, y) => {
  let a = x;
  let b = y;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

export default createGame(GAME_RULES, () => {
  const num1 = randomIntInRange(MIN_NUM, MAX_NUM);
  const num2 = randomIntInRange(MIN_NUM, MAX_NUM);

  return createTask(`${num1} ${num2}`, calcGcd(num1, num2));
});

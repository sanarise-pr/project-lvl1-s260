import { createGame } from '../game';
import { createTask } from '../task';
import { randomIntInRange, digitize } from '../math';
import runGame from '..';

const GAME_RULES = 'Balance the given number.';
const MIN_NUM = 100;
const MAX_NUM = 1999;

const balance = (num) => {
  const iter = (numArr) => {
    const maxIndex = numArr.reduce((acc, cur, i, arr) => (cur > arr[acc] ? i : acc), 0);
    const minIndex = numArr.reduce((acc, cur, i, arr) => (cur < arr[acc] ? i : acc), 0);

    if (numArr[maxIndex] - numArr[minIndex] > 1) {
      const newArr = numArr.slice();
      newArr[maxIndex] -= 1;
      newArr[minIndex] += 1;
      return iter(newArr);
    }

    return numArr;
  };

  const balancedArr = iter(digitize(num));
  balancedArr.sort();
  return balancedArr.join('');
};

export const game = createGame(GAME_RULES, () => {
  const num = randomIntInRange(MIN_NUM, MAX_NUM);

  return createTask(num, balance(num));
});

export default () => runGame(game);

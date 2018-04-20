import { randomIntInRange, digitize } from '../math';
import runGame from '..';

const gameRules = 'Balance the given number.';
const minNum = 100;
const maxNum = 1999;

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

const createTask = () => {
  const num = randomIntInRange(minNum, maxNum);
  return { question: num, answer: balance(num) };
};

export default () => runGame(gameRules, createTask);

import { randomIntInRange } from '../math';
import runGame from '..';

const gameRules = 'What number is missing in this progression?';
const minStart = 0;
const maxStart = 50;
const minInc = 1;
const maxInc = 9;
const progressionLength = 10;

const buildProgressionArr = (start, inc) => {
  const result = [];
  for (let i = 0; i < progressionLength; i += 1) {
    result.push(start + (i * inc));
  }
  return result;
};

export const createTask = () => {
  const start = randomIntInRange(minStart, maxStart);
  const inc = randomIntInRange(minInc, maxInc);
  const progressionArr = buildProgressionArr(start, inc);

  const numIndex = randomIntInRange(0, progressionLength - 1);
  const answer = String(progressionArr[numIndex]);
  progressionArr[numIndex] = '..';

  return { question: progressionArr.join(' '), answer };
};

export default () => runGame(gameRules, createTask);

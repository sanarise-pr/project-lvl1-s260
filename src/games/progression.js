import { randomIntInRange } from '../math';
import runGame from '..';

const GAME_RULES = 'What number is missing in this progression?';
const MIN_START = 0;
const MAX_START = 50;
const MIN_INC = 1;
const MAX_INC = 9;
const PROGRESSION_LENGTH = 10;

const buildProgressionArr = (start, inc) => {
  const result = [];
  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    result.push(start + (i * inc));
  }
  return result;
};

export const createTask = () => {
  const start = randomIntInRange(MIN_START, MAX_START);
  const inc = randomIntInRange(MIN_INC, MAX_INC);
  const progressionArr = buildProgressionArr(start, inc);

  const numIndex = randomIntInRange(0, PROGRESSION_LENGTH - 1);
  const answer = String(progressionArr[numIndex]);
  progressionArr[numIndex] = '..';

  return { question: progressionArr.join(' '), answer };
};

export default () => runGame(GAME_RULES, createTask);

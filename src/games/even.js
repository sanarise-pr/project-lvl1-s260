import { createGame } from '../game';
import { createTask } from '../task';
import { randomIntInRange, isEven } from '../math';

const GAME_RULES = 'Answer "yes" if number even otherwise answer "no".';
const MIN_NUM = 0;
const MAX_NUM = 999;

export default createGame(GAME_RULES, () => {
  const num = randomIntInRange(MIN_NUM, MAX_NUM);
  return createTask(num, isEven(num) ? 'yes' : 'no');
});

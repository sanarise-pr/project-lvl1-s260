import { getRules, createTask } from '../game';
import runTasks from './run-tasks';
import * as io from '../console-io';

export default (game, tasksLimit = 3, mistakesLimit = 0) => {
  io.postWelcome();
  io.postString(getRules(game));
  io.postEmtyLine();

  const userName = io.askUserName();
  io.postUserGreeting(userName);
  io.postEmtyLine();

  const mistakesCnt = runTasks(() => createTask(game))(tasksLimit, mistakesLimit);

  if (mistakesCnt > 0) {
    io.postTryAgain(userName);
  } else {
    io.postFinalCongrats(userName);
  }
};

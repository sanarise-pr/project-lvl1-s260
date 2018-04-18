import runGame from '../game-runer';
import { getRules } from '../game';
import * as io from '../console-io';

export default (game, questionLimit = 3) => {
  io.postWelcome();
  io.postString(getRules(game));
  io.postEmtyLine();

  const userName = io.askUserName();
  io.postUserGreeting(userName);
  io.postEmtyLine();

  const mistakes = runGame(game)(questionLimit);

  if (mistakes > 0) {
    io.postTryAgain(userName);
  } else {
    io.postFinalCongrats(userName);
  }
};

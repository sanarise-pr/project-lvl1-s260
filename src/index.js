import { getRules, createTask } from './game';
import { getQuestion, getAnswer } from './task';
import * as io from './console-io';

const runTasks = getTaskCallback => (tasksLimit, mistakesLimit = 0) => {
  let mistakes = 0;
  for (let i = 0; i < tasksLimit; i += 1) {
    const task = getTaskCallback(i, mistakes);

    io.postQuestion(getQuestion(task));
    const userAnswer = io.askUserAnswer();
    const correctAnswer = String(getAnswer(task));

    if (userAnswer !== correctAnswer) {
      mistakes += 1;
      io.postWrongAnswerMessage(userAnswer, correctAnswer);
    } else {
      io.postCorrectAnswerCongrats();
    }

    if (mistakes > mistakesLimit) {
      break;
    }
  }
  return mistakes;
};

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

import * as io from './console-io';

const runTask = (task) => {
  io.postQuestion(task.question);
  const userAnswer = io.askUserAnswer();
  const correctAnswer = task.answer;

  if (userAnswer === correctAnswer) {
    io.postCorrectAnswerCongrats();
    return 0;
  }

  io.postWrongAnswerMessage(userAnswer, correctAnswer);
  return 1;
};

export default (game, tasksLimit = 3, mistakesLimit = 0) => {
  io.postWelcome();
  io.postString(game.rules);
  io.postEmtyLine();

  const userName = io.askUserName();
  io.postUserGreeting(userName);
  io.postEmtyLine();

  let i = 0;
  let mistakes = 0;
  while (i < tasksLimit && mistakes <= mistakesLimit) {
    const task = game.createTask();
    mistakes += runTask(task);
    i += 1;
  }

  if (mistakes > 0) {
    io.postTryAgain(userName);
  } else {
    io.postFinalCongrats(userName);
  }
};

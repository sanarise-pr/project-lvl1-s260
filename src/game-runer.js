import { createTask } from './game';
import { getQuestion, getAnswer } from './task';
import * as io from '.';

export default game => (questionsLimit, mistakesLimit = 0) => {
  let mistakes = 0;
  for (let i = 0; i < questionsLimit; i += 1) {
    const task = createTask(game);

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

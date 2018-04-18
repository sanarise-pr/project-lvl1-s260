import { getQuestion, getAnswer } from '../task';
import * as io from '../console-io';

export default getTaskCallback => (tasksLimit, mistakesLimit = 0) => {
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

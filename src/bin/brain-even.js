#!/usr/bin/env node
import * as core from '..';
import * as math from '../math';

const GAME_RULES = 'Answer "yes" if number even otherwise answer "no".';
const MIN_INT = 0;
const MAX_INT = 999;
const QUESTIONS_LIMIT = 3;

core.postWelcome();
core.postString(GAME_RULES);
core.postEmtyLine();

const userName = core.askUserName();
core.postUserGreeting(userName);
core.postEmtyLine();

const success = core.askQuestions(QUESTIONS_LIMIT)(() => {
  const num = math.randomIntInRange(MIN_INT, MAX_INT);
  const isNumEven = math.isEven(num);
  const correctAnswer = isNumEven ? 'yes' : 'no';

  core.postQuestion(num);
  const userAnswer = core.askUserAnswer();

  if (userAnswer === correctAnswer) {
    core.postCorrectAnswerCongrats();
    return true;
  }

  core.postWrongAnswerMessage(userAnswer, correctAnswer);
  return false;
});

if (success) {
  core.postFinalCongrats(userName);
} else {
  core.postTryAgain(userName);
}

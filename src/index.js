import readlineSync from 'readline-sync';

export const postWelcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const postString = (str) => {
  console.log(str);
};

export const postEmtyLine = () => {
  console.log();
};

export const askUserName = () => readlineSync.question('May I have your name? ');

export const postUserGreeting = (userName) => {
  console.log(`Hello, ${userName}!`);
};

export const postQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const askUserAnswer = () => readlineSync.question('Your answer: ');

export const postCorrectAnswerCongrats = () => {
  console.log('Correct!');
};

export const postWrongAnswerMessage = (userAnswer, correctAnswer) => {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
};

export const postTryAgain = (userName) => {
  console.log(`Let's try again, ${userName}!`);
};

export const postFinalCongrats = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export const askQuestions = (questionsLimit, mistakesLimit = 0) => (questionCallback) => {
  let mistakes = 0;
  for (let i = 0; i < questionsLimit; i += 1) {
    if (!questionCallback(i)) {
      mistakes += 1;
    }
    if (mistakes > mistakesLimit) {
      return false;
    }
  }
  return true;
};

import readlineSync from 'readline-sync';

const TASK_LIMIT = 3;

const runTask = (task) => {
  console.log(`Question: ${task.question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = task.answer;

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return false;
  }

  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return true;
};

export default (gameRules, createTask) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameRules}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < TASK_LIMIT; i += 1) {
    const task = createTask();
    const mistake = runTask(task);
    if (mistake) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

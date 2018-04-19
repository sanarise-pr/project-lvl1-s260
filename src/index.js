import readlineSync from 'readline-sync';

const runTask = (task) => {
  console.log(`Question: ${task.question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = task.answer;

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return 0;
  }

  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return 1;
};

export default (game, tasksLimit = 3, mistakesLimit = 0) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${game.rules}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  let i = 0;
  let mistakes = 0;
  while (i < tasksLimit && mistakes <= mistakesLimit) {
    const task = game.createTask();
    mistakes += runTask(task);
    i += 1;
  }

  if (mistakes > 0) {
    console.log(`Let's try again, ${userName}!`);
  } else {
    console.log(`Congratulations, ${userName}!`);
  }
};

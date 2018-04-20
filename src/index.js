import readlineSync from 'readline-sync';

const taskLimit = 3;

export default (gameRules, createTask) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameRules}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < taskLimit; i += 1) {
    const task = createTask();
    console.log(`Question: ${task.question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = task.answer;

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

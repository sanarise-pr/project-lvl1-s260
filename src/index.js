import readlineSync from 'readline-sync';

const postWelcome = () => {
  console.log('Welcome to the Brain Games!\n');
};

const askUserName = () => readlineSync.question('May I have your name? ');

const postUserGreeting = (userName) => {
  console.log(`Hello, ${userName}!`);
};

export { postWelcome, askUserName, postUserGreeting };

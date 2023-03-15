import readlineSync from 'readline-sync';

const tekst = (text) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}! `);
  if (text !== undefined) console.log(text);
  return name;
};
export default tekst ;
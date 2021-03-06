import engine from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const makeGame = () => {
  const number = getRandomNumber(1, 100);
  const question = number.toString();
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, answer];
};

export default () => engine(makeGame, gameRule);

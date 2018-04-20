export const randomIntInRange = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

export const isEven = int => int % 2 === 0;

export const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));

export const digitize = n => [...`${n}`].map(i => parseInt(i, 10));

export const isPrime = (num) => {
  const maxDivider = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= maxDivider; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

export const randomIntInRange = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

export const isEven = int => int % 2 === 0;

export const gcd = (x, y) => {
  let a = x;
  let b = y;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

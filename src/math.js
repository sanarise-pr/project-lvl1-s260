export const randomIntInRange = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

export const isEven = int => int % 2 === 0;
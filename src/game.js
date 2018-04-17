import { cons, car, cdr } from 'hexlet-pairs';

export const createGame = (rules, createTaskCallback) => cons(rules, createTaskCallback);

export const getRules = game => car(game);

export const createTask = game => cdr(game)();

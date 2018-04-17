import { cons, car, cdr } from 'hexlet-pairs';

export const createTask = (question, answer) => cons(question, answer);

export const getQuestion = task => car(task);

export const getAnswer = task => cdr(task);

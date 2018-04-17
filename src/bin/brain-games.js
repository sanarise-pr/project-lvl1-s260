#!/usr/bin/env node
import * as io from '..';

io.postWelcome();
io.postEmtyLine();

const userName = io.askUserName();
io.postUserGreeting(userName);

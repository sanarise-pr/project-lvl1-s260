#!/usr/bin/env node
import * as io from '../console-io';

io.postWelcome();
io.postEmtyLine();

const userName = io.askUserName();
io.postUserGreeting(userName);

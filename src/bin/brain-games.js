#!/usr/bin/env node
import * as core from '..';

core.postWelcome();
core.postEmtyLine();

const userName = core.askUserName();
core.postUserGreeting(userName);

#!/usr/bin/env node
import * as core from '..';

core.postWelcome();
const userName = core.askUserName();
core.postUserGreeting(userName);

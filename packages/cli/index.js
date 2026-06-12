#!/usr/bin/env node

import chalk from 'chalk';
import { createCommand } from './command/create.js';

import './lib/print.js';

async function runCLI() {
  try {
    await createCommand();
  } catch (error) {
    console.error(chalk.red('Ошибка:'), error);
  }
}

runCLI();

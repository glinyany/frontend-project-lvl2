#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.1', '-v, --version', 'output the version number')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1>', 'path to first file')
  .arguments('<filepath2>', 'path to second file')
  .action((filepath1, filepath2) => {
    const difference = genDiff(filepath1, filepath2, program.opts().format);
    console.log(difference);
  });

program.parse();

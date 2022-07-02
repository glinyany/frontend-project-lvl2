import { extname, resolve } from 'path';
import { readFileSync } from 'fs';
import parse from './parsers.js';
import buildTree from './differenceHandler.js';
import getFormat from './formatters/index.js';

const prepareData = (filepath) => {
  const type = extname(filepath).slice(1);
  const formedFilepath = resolve(process.cwd(), filepath);
  const file = readFileSync(formedFilepath, 'utf-8');

  return parse(file, type);
};

const genDiff = (path1, path2, format = 'stylish') => {
  const data1 = prepareData(path1);
  const data2 = prepareData(path2);
  const result = buildTree(data1, data2);
  return getFormat(result, format);
};

export default genDiff;

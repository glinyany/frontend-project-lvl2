import path from 'path';
import parse from './parsers.js';
import readFile from './utils.js';
import buildTree from './differenceHandler.js';
import getFormat from './formatters/index.js';

export default (filepath1, filepath2, format = 'stylish') => {
  const ext1 = path.extname(filepath1);
  const ext2 = path.extname(filepath2);

  const data1 = parse(readFile(filepath1), ext1);
  const data2 = parse(readFile(filepath2), ext2);

  const differenceObject = buildTree(data1, data2);
  const styled = getFormat(differenceObject, format);
  return styled;
};

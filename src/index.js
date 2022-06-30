import path from 'path';
import fs from 'fs';
import parse from './parsers.js';
import buildTree from './differenceHandler.js';
import getFormat from './formatters/index.js';

const genDiff = (path1, path2, format = 'stylish') => {
  const ext1 = path.extname(path1);
  const ext2 = path.extname(path2);

  const filepath1 = path.resolve('__fixtures__', path1);
  const data1 = parse(fs.readFileSync(filepath1, 'utf-8'), ext1);
  const filepath2 = path.resolve('__fixtures__', path2);
  const data2 = parse(fs.readFileSync(filepath2, 'utf-8'), ext2);
  const result = buildTree(data1, data2);
  return getFormat(result, format);
};

export default genDiff;

// export default (filepath1, filepath2, format = 'stylish') => {
//   const ext1 = path.extname(filepath1);
//   const ext2 = path.extname(filepath2);

//   const data1 = parse(readFile(filepath1), ext1);
//   const data2 = parse(readFile(filepath2), ext2);

//   const differenceObject = buildTree(data1, data2);

//   return getFormat(differenceObject, format);
// };

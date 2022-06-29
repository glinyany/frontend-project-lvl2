import path from 'path';
import fs from 'fs';
import parse from './parsers.js';
import readFile from './utils.js';
import buildTree from './differenceHandler.js';
import getFormat from './formatters/index.js';

// export default (filepath1, filepath2, format = 'stylish') => {
//   const ext1 = path.extname(filepath1);
//   const ext2 = path.extname(filepath2);

//   const data1 = parse(readFile(filepath1), ext1);
//   const data2 = parse(readFile(filepath2), ext2);

//   const differenceObject = buildTree(data1, data2);

//   return getFormat(differenceObject, format);
// };
const genDiff = (path1, path2, format = 'stylish') => {
  const ext1 = path.extname(path1);
  const ext2 = path.extname(path2);

  const filePath1 = path.resolve('__fixtures__', path1);
  const fileObj1 = parse(fs.readFileSync(filePath1, 'utf-8'), ext1);
  const filePath2 = path.resolve('__fixtures__', path2);
  const fileObj2 = parse(fs.readFileSync(filePath2, 'utf-8'), ext2);
  const result = buildTree(fileObj1, fileObj2);
  return getFormat(result, format);
};

export default genDiff;

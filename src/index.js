/* eslint-disable no-restricted-syntax */
import path from 'path';
import genDiff from './differenceHandler.js';
import parse from './parsers.js';
import readFile from './utils.js';
import output from './generateOutput.js';

export default (filepath1, filepath2) => {
  const ext1 = path.extname(filepath1);
  const ext2 = path.extname(filepath2);

  const data1 = parse(readFile(filepath1), ext1);
  const data2 = parse(readFile(filepath2), ext2);

  const arraysDifference = genDiff(data1, data2);

  return output(arraysDifference);
};

/* OUTPUT VIEW
gendiff filepath1.json filepath2.json

{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}
*/

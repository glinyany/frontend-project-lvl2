import { expect, test, describe } from '@jest/globals';
import path from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const cases = [
  ['nestedFile1.yml', 'nestedFile2.json', 'stylish', 'right-nestedJson.txt'],
  ['nestedFile1.yml', 'nestedFile2.json', 'plain', 'right-plain.txt'],
  ['nestedFile1.yml', 'nestedFile2.json', 'json', 'right-json.txt'],
];

describe.each(cases)('Compare %s and %s in format %s to have %s', (file1, file2, formatName, result) => {
  test('gendiff test', () => {
    const expected = readFile(result);
    expect(genDiff(file1, file2, formatName)).toBe(expected);
  });
});

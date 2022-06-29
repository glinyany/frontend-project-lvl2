import { expect, test, describe } from '@jest/globals';
import genDiff from '../src/index.js';
import readFile from '../src/utils.js';

const cases = [
  ['nestedFile1.yml', 'nestedFile2.yml', 'stylish', 'right-nestedJson.txt'],
  ['nestedFile1.yml', 'nestedFile2.yml', 'plain', 'right-plain.txt'],
  ['nestedFile1.yml', 'nestedFile2.yml', 'json', 'right-json.txt'],
];

describe.each(cases)('Compare %s and %s in format %s to have %s', (file1, file2, formatName, result) => {
  test('gendiff test', () => {
    const expected = readFile(result);
    expect(genDiff(file1, file2, formatName)).toBe(expected);
  });
});

/*

test('gendiff json-right-txt', () => {
  const path1 = ('file1.json');
  const path2 = ('file2.json');
  const answer = readFile('right-flat.txt');
  expect(genDiff(path1, path2)).toEqual(answer);
});

test('gendiff yaml-right-txt', () => {
  const path1 = ('file1.yml');
  const path2 = ('file2.yml');
  const answer = readFile('right-flat.txt');
  expect(genDiff(path1, path2)).toEqual(answer);
});

test('stylish nested-yml', () => {
  const path1 = ('nestedFile1.yml');
  const path2 = ('nestedFile2.yml');
  const answer = readFile('right-nestedJson.txt');
  expect(genDiff(path1, path2, 'stylish')).toEqual(answer);
});

test('plain nested-yml', () => {
  const path1 = ('nestedFile1.yml');
  const path2 = ('nestedFile2.yml');
  const answer = readFile('right-plain.txt');
  expect(genDiff(path1, path2, 'plain')).toEqual(answer);
});

test('gendiff nested-json', () => {
  const path1 = ('nestedFile1.yml');
  const path2 = ('nestedFile2.yml');
  const question = genDiff(path1, path2, 'json');
  const answer = readFile('right-json.txt');
  expect(question).toEqual(answer);
});

*/

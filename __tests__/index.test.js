import { expect, test } from '@jest/globals';
import genDiff from '../src/index.js';
import readFile from '../src/utils.js';

test('gendiff json-right-txt', () => {
  const path1 = ('file1.json');
  const path2 = ('file2.json');
  const answer = readFile('right-flat.txt');
  expect(genDiff(path1, path2)).toEqual(answer);
});

test('gendiff yaml-right-txt', () => {
  const path1 = ('file1.yaml');
  const path2 = ('file2.yaml');
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

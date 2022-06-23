import genDiff from '../src/index.js';
import readFile from '../src/utils.js';

test('gendiff json-right-txt', () => {
  const path1 = ('file1.json');
  const path2 = ('file2.json');
  const answer = readFile('right-json.txt');
  expect(genDiff(path1, path2)).toEqual(answer);
});

test('gendiff yaml-right-txt', () => {
  const path1 = ('file1.yaml');
  const path2 = ('file2.yaml');
  const answer = readFile('right-yaml.txt');
  expect(genDiff(path1, path2)).toEqual(answer);
});

// test('gendiff wrong extension', () => {
//   const path1 = getFixturePath('file1-wrong.txt');
//   const path2 = getFixturePath('file2-wrong.txt');
//   const error = new Error("Invalid file extension: '.txt'! Try supported formats.");
//   expect(genDiff(path1, path2)).toThrow(error);
// });

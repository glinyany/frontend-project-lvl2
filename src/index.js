import { readFileSync } from 'fs';
import _ from 'lodash';

const genDiff = (json1, json2) => {
  const keys1 = _.keys(json1);
  const keys2 = _.keys(json2);
  const sumOfKeys = _.sortBy(_.union(keys1, keys2));

  let result = {};
  result = sumOfKeys.map((key) => {
    if (!_.has(json1, key)) {
      return {
        name: key,
        value: json2[key],
        type: 'added',
      };
    }
    if (!_.has(json2, key)) {
      return {
        name: key,
        value: json1[key],
        type: 'deleted',
      };
    }
    if (json1[key] !== json2[key]) {
      return {
        name: key,
        value1: json1[key],
        value2: json2[key],
        type: 'changed',
      };
    }
    return {
      name: key,
      value: json1[key],
      type: 'unchanched',
    };
  });
  return result;
};

export default (filepath1, filepath2) => {
  const json1 = readFileSync(filepath1, 'utf-8');
  const json2 = readFileSync(filepath2, 'utf-8');

  const obj1 = JSON.parse(json1);
  const obj2 = JSON.parse(json2);

  const arraysDiff = genDiff(obj1, obj2);

  let result = '{\n';
  for (const item of arraysDiff) {
    if (`${item.type}` === 'deleted') {
      result += ` - ${item.name}: ${item.value} \n`;
    }
    if (`${item.type}` === 'unchanched') {
      result += `   ${item.name}: ${item.value} \n`;
    }
    if (`${item.type}` === 'changed') {
      result += ` - ${item.name}: ${item.value1} \n`;
      result += ` + ${item.name}: ${item.value2} \n`;
    }
    if (`${item.type}` === 'added') {
      result += ` + ${item.name}: ${item.value} \n`;
    }
  }

  return result.concat('}');
};

/*
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

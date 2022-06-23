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

export default genDiff;

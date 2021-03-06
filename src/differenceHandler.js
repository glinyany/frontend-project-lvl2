import _ from 'lodash';

const genDiff = (object1, object2) => {
  const keys = _.sortBy(_.union(Object.keys(object1), Object.keys(object2)));

  const result = keys.map((key) => {
    const value1 = object1[key];
    const value2 = object2[key];

    if (!_.has(object1, key)) {
      return { key, value: value2, type: 'added' };
    }

    if (!_.has(object2, key)) {
      return { key, value: value1, type: 'deleted' };
    }

    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return { key, children: genDiff(value1, value2), type: 'nested' };
    }

    if (!_.isEqual(value1, value2)) {
      return {
        key, value1, value2, type: 'updated',
      };
    }

    return { key, value: value1, type: 'unchanged' };
  });
  return result;
};

const buildTree = (object1, object2) => {
  const result = { type: 'main', children: genDiff(object1, object2) };
  return result;
};

export default buildTree;

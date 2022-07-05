import _ from 'lodash';

const stringify = (node) => {
  if (typeof node === 'string') {
    return `'${node}'`;
  }
  if (_.isPlainObject(node)) {
    return '[complex value]';
  }
  return String(node);
};

const plain = (tree) => {
  const iter = (innerTree, signatureKeys) => innerTree
    .map((node) => {
      const lineStart = `Property '${[...signatureKeys, node.key].join('.')}'`;
      const {
        type, key, value, value1, value2,
      } = node;
      switch (type) {
        case 'nested': {
          return iter(node.children, [...signatureKeys, key]);
        }
        case 'added': {
          return `${lineStart} was ${type} with value: ${stringify(value)}`;
        }
        case 'deleted': {
          return `${lineStart} was removed`;
        }
        case 'updated': {
          return `${lineStart} was ${type}. From ${stringify(value1)} to ${stringify(value2)}`;
        }
        case 'unchanged':
          return null;
        default:
          throw new Error('Type is not correct');
      }
    }).filter(Boolean).join('\n');
  return iter(tree.children, []);
};

export default plain;

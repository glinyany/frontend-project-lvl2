/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import _ from 'lodash';
import path from 'path';

const stringify = (tree, status) => {
  if (!_.isObject(tree)) {
    return String(tree);
  }

  return '[complex value]';
};

const plain = (node, nodeSignature = node.key) => {
  console.log(`>> ${node.key}`, `> SIGNATURE: ${nodeSignature}`);
  // nodeSignature = path.join(nodeSignature, node.key);

  switch (node.type) {
    case 'main': {
      return node.children.flatMap((child) => plain(child));
    }
    case 'nested': {
      console.log('PARENT:', node.key, `ANC: ${nodeSignature}`);
      return node.children.flatMap((child) => plain(child), node.key);
    }
    case 'added': {
      return `Property '${nodeSignature}' was ${node.type} with value: ${stringify(node.value)}`;
    }
    case 'deleted': {
      return `Property '${node.key}' was removed`;
    }
    case 'updated': {
      const {
        key, type, value1, value2,
      } = node;
      return `Property '${key}' was ${type}. From ${stringify(value1)} to ${stringify(value2)}`;
    }
    case 'unchanged':
      return '';
  }
};

// export default plain;
export default (tree) => {
  const array = _.compact(plain(tree));

  return array;
};

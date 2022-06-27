import _ from 'lodash';

const space = (depth, spacesCount = 4) => ' '.repeat(depth * spacesCount - 2);

const stringify = (tree, depth, iter) => {
  if (!_.isObject(tree)) {
    return String(tree);
  }

  const result = Object.entries(tree)
    .map(([key, value]) => iter({ type: 'unchanged', key, value }, depth + 1));

  return `{\n${result.join('\n')}\n${space(depth)}  }`;
};

const iter = (node, depth = 0) => {
  switch (node.type) {
    case 'main': {
      const result = node.children.flatMap((child) => iter(child, depth + 1));
      return `{\n${result.join('\n')}\n}`;
    }
    case 'nested': {
      const result = node.children.flatMap((child) => iter(child, depth + 1));
      return `${space(depth)}  ${node.key}: {\n${result.join('\n')}\n${space(depth)}  }`;
    }
    case 'added': {
      return `${space(depth)}+ ${node.key}: ${stringify(node.value, depth, iter)}`;
    }
    case 'deleted': {
      return `${space(depth)}- ${node.key}: ${stringify(node.value, depth, iter)}`;
    }
    case 'unchanged':
      return `${space(depth)}  ${node.key}: ${stringify(node.value, depth, iter)}`;
    case 'updated': {
      const { key, value1, value2 } = node;
      const data1 = `${space(depth)}- ${key}: ${stringify(value1, depth, iter)}`;
      const data2 = `${space(depth)}+ ${key}: ${stringify(value2, depth, iter)}`;
      return `${data1}\n${data2}`;
    }
    default:
      return '';
  }
};

export default iter;

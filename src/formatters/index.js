import stylish from './stylish.js';
import plain from './plain.js';

const getFormat = (tree, format) => {
  switch (format) {
    case 'stylish':
      return stylish(tree);
    case 'plain':
      return plain(tree);
    default:
      return JSON.stringify(tree);
  }
};

export default getFormat;

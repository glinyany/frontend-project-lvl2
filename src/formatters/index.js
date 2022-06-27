import stylish from './stylish.js';
import plain from './plain.js';

const getFormat = (diff, format) => {
  const formatters = {
    stylish,
    plain,
  };
  const formatter = formatters[format];
  return formatter(diff);
};

export default getFormat;

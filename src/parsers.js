import { load } from 'js-yaml';

export default (content, extension) => {
  switch (extension) {
    case '.json':
      return JSON.parse(content);
    case '.yaml':
      return load(content);
    case '.yml':
      return load(content);
    default:
      throw new Error(`UNKNOWN FORMAT: ${extension}`);
  }
};

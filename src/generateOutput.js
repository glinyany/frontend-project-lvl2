/* eslint-disable no-restricted-syntax */
// old function that generate output of flat difference (project isnt using this module anymore)
export default (object) => {
  let result = '{\n';
  const symbol = { plus: ' +', minus: ' -', twoSpaces: '  ' };

  for (const item of object) {
    switch (item.type) {
      case 'deleted':
        result += `${symbol.minus} ${item.name}: ${item.value}\n`;
        break;
      case 'added':
        result += `${symbol.plus} ${item.name}: ${item.value}\n`;
        break;
      case 'changed':
        result += `${symbol.minus} ${item.name}: ${item.value1}\n`;
        result += `${symbol.plus} ${item.name}: ${item.value2}\n`;
        break;
      default:
        result += `${symbol.twoSpaces} ${item.name}: ${item.value}\n`;
        break;
    }
  }
  result.concat('}');

  return result;
};

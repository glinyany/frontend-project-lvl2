/* eslint-disable no-restricted-syntax */

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
  return result.concat('}');
};

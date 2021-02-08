function encode(str) {
    let array = str.split('');
    for (let index = 0; index < array.length; index += 1) {
      switch (true) {
        case (array[index] === 'a'):
          array[index] = 1;
          break;
        case (array[index] === 'e'):
          array[index] = 2;
          break;
        case (array[index] === 'i'):
          array[index] = 3;
          break;
        case (array[index] === 'o'):
          array[index] = 4;
          break;
        case (array[index] === 'u'):
          array[index] = 5;
          break;
        default:
          break;
      }
    }
    str = array.join('');
    return str;
  }

  module.exports = encode;
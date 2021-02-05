function decode(str) {
    let array = str.split('');
    for (let index = 0; index < array.length; index += 1) {
      switch (true) {
        case (array[index] === '1'):
          array[index] = 'a';
          break;
        case (array[index] === '2'):
          array[index] = 'e';
          break;
        case (array[index] === '3'):
          array[index] = 'i';
          break;
        case (array[index] === '4'):
          array[index] = 'o';
          break;
        case (array[index] === '5'):
          array[index] = 'u';
          break;
        default:
          break;
      }
    }
    str = array.join('');
    return str;
  }

  module.exports = decode;
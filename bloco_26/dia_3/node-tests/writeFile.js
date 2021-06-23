const fs = require('fs');

module.exports = (file, text) => {
  fs.writeFileSync(file, text)

  return 'ok';
};

const multer = require('multer');
const path = require('path');

const UPLOAD_FOLDER = path.join(__dirname, '..', 'uploads');

const upload = multer({ dest: 'uploads' });

module.exports = upload;

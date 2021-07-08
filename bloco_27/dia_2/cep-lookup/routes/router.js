const express =  require('express');
const addressController = require('../controllers/AddressController');

const router = express.Router();

router.use('/cep', addressController);

module.exports = router;

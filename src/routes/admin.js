const express = require('express');
const router = express.Router();
const { admin } = require('../controllers/adminController');
const adminAccess = require('../middlewares/adminAccess');

router.get('/', adminAccess, admin);

module.exports = router;
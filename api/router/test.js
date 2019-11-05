const express = require('express');
const router = express.Router();
const postTest = require('../controllers/postTest');

router.post('/', postTest);

module.exports = router;
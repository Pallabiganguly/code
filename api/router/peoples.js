const express = require('express');
const router = express.Router();
const peoples = require('../controllers/peoples');

router.post('/', peoples);

module.exports = router;
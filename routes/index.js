const express = require('express');

const { getIndex } = require('../Controllers/todoContoller');

const router = express.Router();

router.get('/', getIndex);

module.exports = router;

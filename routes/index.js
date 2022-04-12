const express = require('express');

const { deleteTodo, complatedTodo, getAll } = require('../Controllers/todoContoller');

const router = express.Router();

// router.post('/', addTodo);
router.get('/', getAll);

module.exports = router;

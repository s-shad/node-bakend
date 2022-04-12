const express = require('express');

const { addTodo, deleteTodo, complateTodo } = require('../Controllers/todoContoller');

const router = express.Router();

router.post('/add-todo', addTodo);

router.get('/delete-todo/:id', deleteTodo);
router.get('/completed-todo/:id', complateTodo);

// router.post('/s', getAll);

module.exports = router;

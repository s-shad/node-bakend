const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
	text: {
		type: String,
		minlength: 3,
		required: true,
		trim: true,
	},
	completed: {
		type: Boolean,
		default: false,
	},
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;

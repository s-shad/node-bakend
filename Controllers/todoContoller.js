const Todo = require('../model/todoModels');

exports.addTodo = async (req, res) => {
	if (!req.body.todo) return redirect('/');
	try {
		await Todo.create({ text: req.body.todo });
		res.redirect('/');
	} catch (err) {
		console.log(err);
	}
};

exports.deleteTodo = async (req, res) => {
	try {
		await Todo.findByIdAndRemove(req.params.id);
		res.redirect('/');
	} catch (err) {
		console.log(err);
	}
};

exports.complateTodo = async (req, res) => {
	try {
		const todo = await Todo.findById(req.params.id);
		todo.completed = true;
		await todo.save();
		res.redirect('/');
	} catch (err) {
		console.log(err);
	}
};

exports.getIndex = async (req, res) => {
	const completedTodos = await Todo.countDocuments({ completed: true });
	const todos = await Todo.find();
	console.log(todos);
	res.render('index', {
		pageTitle: 'کارهای روزمره',
		todos,
		completedTodos,
		remainigTodos: todos.length - completedTodos,
	});
};

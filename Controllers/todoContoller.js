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
		await Todo.destroy({ where: { id: req.params.id } });
		res.redirect('/');
	} catch (err) {
		console.log(err);
	}
};

exports.complateTodo = async (req, res) => {
	try {
		const todo = await Todo.findByPk(req.params.id);
		todo.cmpleted = true;
		await todo.save();
		res.redirect('/');
	} catch (err) {
		console.log(err);
	}
};

exports.getIndex = async (req, res) => {
	const completedTodos = await Todo.count({ where: { cmpleted: true } });
	const todos = await Todo.findAll();
	res.render('index', {
		pageTitle: 'کارهای روزمره',
		todos,
		completedTodos,
		remainigTodos: todos.length - completedTodos,
	});
};

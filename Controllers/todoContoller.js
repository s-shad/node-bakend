const Todo = require('../model/todoModels');

function addTodo(req, res) {
	const todo = new Todo(req.body.todo);
	todo.save();
	return res.redirect('/');
}

async function getAll(req, res) {
	const data = await Todo.fechAll();
	res.render('index', { pageTitle: 'کارهای روزمره', todos: data.rows });
}

async function deleteTodo(req, res) {
	try {
		console.log(req.params.id);
		const resualt = await Todo.deleteTodo(req.params.id);
		res.redirect('/');
	} catch (error) {
		res.send(error);
	}
}
async function complateTodo(req, res) {
	await Todo.complateTodo(req.params.id);
	res.redirect('/');
	try {
	} catch (error) {}
}

module.exports = {
	getAll,
	addTodo,
	deleteTodo,
	complateTodo,
};

const Todo = require('../model/todoModels');

exports.addTodo = (req, res) => {
	if (!req.body.todo) return redirect('/');
	console.log(req.body.todo);
	Todo.create({ text: req.body.todo })
		.then(result => {
			console.log(result);
			res.redirect('/');
		})
		.catch(err => console.log(err));
};

exports.deleteTodo = (req, res) => {
	Todo.destroy({ where: { id: req.params.id } })
		.then(res.redirect('/'))
		.catch(err => console.log(err));
};

exports.complateTodo = (req, res) => {
	Todo.findByPk(req.params.id).then(todo => {
		todo.cmpleted = true;
		console.log(todo);
		return todo.save().then(() => res.redirect('/'));
	});
};

exports.getIndex = (req, res) => {
	Todo.count({ where: { cmpleted: true } }).then(completedTodos => {
		Todo.findAll().then(todos => {
			res.render('index', {
				pageTitle: 'کارهای روزمره',
				todos,
				completedTodos,
				remainigTodos: todos.length - completedTodos,
			});
		});
	});
};

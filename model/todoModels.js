const Orm = require('shadorm');

const orm = new Orm();

class Todo {
	constructor(text, complated = false) {
		this.text = text;
		this.complated = complated;
	}

	async save() {
		const resualt = await orm.save(this, 'todos');
		return resualt;
	}

	static async fechAll() {
		const resualt = await orm.getAll('todos');
		return resualt;
	}

	static async deleteTodo(id) {
		const resualt = await orm.delete('id', id, 'todos');
		return resualt.command;
	}

	static async complateTodo(id) {
		const data = await (await orm.find('id', id, 'todos')).rows;
		data[0].complated = true;
		console.log(data.complated);
		const result = orm.update(data[0], 'id', id, 'todos');
		return result;
	}
}

module.exports = Todo;

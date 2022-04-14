const { DataTypes } = require('sequelize');

const sequelize = require('../utils/dbconnect');

const Todo = sequelize.define('Todo', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	},
	text: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	cmpleted: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
		allowNull: true,
	},
});

module.exports = Todo;

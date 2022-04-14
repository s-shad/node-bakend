const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('shab', 'postgres', '123698741', {
	dialect: 'postgres',
	host: 'localhost',
	port: '5433',
});

module.exports = sequelize;

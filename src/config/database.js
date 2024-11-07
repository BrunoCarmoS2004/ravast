const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pokemon', 'postgres', '2944', {
    host: 'localhost',
    dialect: 'postgres', 
    logging: false,
});

module.exports = sequelize;

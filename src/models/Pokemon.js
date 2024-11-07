const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pokemon = sequelize.define('Pokemon', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    altura: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    peso: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    nivelPoder: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'pokemons',
    timestamps: false,
});

module.exports = Pokemon;

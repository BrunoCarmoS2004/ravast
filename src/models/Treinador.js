const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pokemon = require('./Pokemon');

const Treinador = sequelize.define('Treinador', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genero: {
        type: DataTypes.ENUM('Masculino', 'Feminino', 'Outro'),
        allowNull: false,
    },
    altura: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    peso: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
}, {
    tableName: 'treinadores',
    timestamps: false,
});

Treinador.hasMany(Pokemon, { foreignKey: 'treinadorId', as: 'pokemons' });
Pokemon.belongsTo(Treinador, { foreignKey: 'treinadorId', as: 'treinador' });

module.exports = Treinador;

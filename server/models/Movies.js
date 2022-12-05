const Sequelize = require('sequelize');
const database = require('../db');

const Movies = database.define('movies', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    rate: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    synopsis: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Movies;
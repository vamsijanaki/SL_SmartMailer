require('dotenv').config(); // Load environment variables from .env file

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: true // Adjust based on your database setup
    }
  });

module.exports = sequelize;
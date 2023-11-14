const { Sequelize } = require('sequelize');
const config = require('./config');
const pg = require('pg');
require('dotenv').config();

const sequelize = new Sequelize(config.development.url, {
  define: {
    timetamps: true,
    underscored: true,
  },
  dialectModule: pg
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database!');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  }
});
module.exports = { Sequelize, sequelize };
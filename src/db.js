
const mysql = require('mysql2/promise');
require('dotenv').config();

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
  process.env.DB_NAME || tiket, 
  process.env.DB_USER || root, 
  process.env.DB_PASSWORD || lala, {
  host: process.env.DB_HOST || localhost,
  dialect: 'mysql',
});

module.exports = sequelize;


module.exports = pool;

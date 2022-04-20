import {Sequelize} from "sequelize";

const db = new Sequelize('db', 'root', 'root', {
  host: process.env.HOST,
  dialect: 'mysql',
  logging: false,
});

export default db;
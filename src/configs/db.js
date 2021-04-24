const Sequelize = require('sequelize');

const DBCONNECTION = new Sequelize({
username: "db_user",
    password: "rosidmustofa",
    database: "fresh_market",
    host: "mysql-28191-0.cloudclusters.net",
    dialect: "mysql",
    port: 28191
});

module.exports = DBCONNECTION;
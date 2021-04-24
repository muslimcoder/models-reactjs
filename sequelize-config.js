require('dotenv').config();
const nodeEnv = process.env.NODE_ENV;
module.exports = {
  [nodeEnv]: {
    username: "db_user",
    password: "rosidmustofa",
    database: "fresh_market",
    host: "mysql-28191-0.cloudclusters.net",
    dialect: "mysql",
    port: 28191
  }
}
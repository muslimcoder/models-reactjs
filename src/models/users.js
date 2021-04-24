const { Model, DataTypes } = require('sequelize');
const DBCONNECTION = require('../configs/db');
//const t = await sequelize.transaction();

class Users extends Model {
  static associate(models){

  }
  static get() {
   const users = this.findByPk(1, {raw: true}); 
   // this.create(data)
   return users
  }
};

Users.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.BIGINT
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.TINYINT
  },
  created_at: {
    type: DataTypes.DATE
  },
  updated_at: {
    type: DataTypes.DATE
  },
  deleted_at: {
    type: DataTypes.DATE
  }

},{
  sequelize: DBCONNECTION,
  timestamps: false,
  underscored: true,
  modelName: 'Users',
  tableName: 'users'
});
module.exports = Users;

const { Model, DataTypes } = require('sequelize');
const DBCONNECTION = require('../configs/db');
//const t = await sequelize.transaction();

class Category extends Model {
  static associate(models){

  }
  static get() {
   const category = this.findByPk(1, {raw: true}); 
   // this.create(data)
   return category
  }
};

Category.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.BIGINT
  },
  name: {
    type: DataTypes.TEXT
  },
  description: {
    type: DataTypes.TEXT
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
  modelName:'Category',
  tableName: 'category'
});
module.exports = Category;

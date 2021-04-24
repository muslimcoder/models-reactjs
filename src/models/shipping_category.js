const { Model, DataTypes } = require('sequelize');
const DBCONNECTION = require('../configs/db');
//const t = await sequelize.transaction();

class shippingCategory extends Model {
  static associate(models){

  }
  static get() {
   const shipping_category = this.findByPk(1, {raw: true}); 
   // this.create(data)
   return shipping_category
  }
};

shippingCategory.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.BIGINT
  },
name: {
  type: DataTypes.STRING
},
status: {
  type: DataTypes.TINYINT
}
},
{
  sequelize: DBCONNECTION,
  timestamps: false,
  underscored: true,
  modelName: 'shippingCategory',
  tableName: 'shipping_category'
});
module.exports = shippingCategory;

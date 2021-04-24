const { Model, DataTypes } = require('sequelize');
const DBCONNECTION = require('../configs/db');
//const t = await sequelize.transaction();

class Orders extends Model {
  static associate(models){

  }
  static get() {
   const orders = this.findByPk(1, {raw: true}); 
   // this.create(data)
   return orders
  }
};

Orders.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.BIGINT
  },
  order_uuid: {
    type: DataTypes.UUID
  },
  user_id: {
    type: DataTypes.BIGINT
  },
  tax: {
    type: DataTypes.DECIMAL
  },
  subtotal: {
    type: DataTypes.DECIMAL
  },
  shipping: {
    type: DataTypes.DECIMAL
  },
  shipping_address_id: {
    type: DataTypes.BIGINT
  },
  shipping_category: {
    type: DataTypes.BIGINT
  },
  payment_method: {
    type: DataTypes.BIGINT
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
  modelName: 'Orders',
  tableName: 'orders'
});
module.exports = Orders;

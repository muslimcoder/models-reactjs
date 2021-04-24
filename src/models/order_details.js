const { Model, DataTypes } = require('sequelize');
const DBCONNECTION = require('../configs/db');
//const t = await sequelize.transaction();

class orderDetails extends Model {
  static associate(models){

  }
  static get() {
   const order_details = this.findByPk(1, {raw: true}); 
   // this.create(data)
   return order_details
  }
};

orderDetails.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.BIGINT
  },
  orders_id: {
    type: DataTypes.BIGINT
  },
  product_id: {
    type: DataTypes.BIGINT
  },
  price: {
    type: DataTypes.DECIMAL
  },
  discount: {
    type: DataTypes.DECIMAL
  },
  quantity: {
    type: DataTypes.INTEGER
  },
  quantity_type: {
    type: DataTypes.STRING
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
  modelName: 'orderDetails',
  tableName: 'order_details'
});
module.exports = orderDetails;


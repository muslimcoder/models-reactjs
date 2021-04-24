const { Model, DataTypes } = require('sequelize');
const DBCONNECTION = require('../configs/db');
//const t = await sequelize.transaction();

class Product extends Model {
  static associate(models){

  }
  static get() {
   const product = this.findByPk(1, {raw: true}); 
   // this.create(data)
   return product
  }
};

Product.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.BIGINT
  },
  product_uuid: {
    type: DataTypes.UUID
  },
  sku: {
    type: DataTypes.TEXT
  },
  stock_status: {
    type: DataTypes.TINYINT
  },
  category_id: {
    type: DataTypes.BIGINT
  },
  farm: {
    type: DataTypes.BIGINT
  },
  freshness: {
    type: DataTypes.STRING
  },
  delivery: {
    type: DataTypes.STRING
  },
  buy_by: {
    type: DataTypes.TEXT
  },
  price_buy_by: {
    type: DataTypes.TEXT
  },
  discount_percentage: {
    type: DataTypes.INTEGER
  },
  rating: {
    type: DataTypes.INTEGER
  },
  description :{
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
  modelName: 'Product',
  tableName: 'product'
});
module.exports = Product;

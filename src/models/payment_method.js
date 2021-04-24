const { Model, DataTypes } = require('sequelize');
const DBCONNECTION = require('../configs/db');
//const t = await sequelize.transaction();

class paymentMethod extends Model {
  static associate(models){

  }
  static get() {
   const payment_method = this.findByPk(1, {raw: true}); 
   // this.create(data)
   return payment_method
  }
};

paymentMethod.init({
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
  modelName: 'paymentMethod',
  tableName: 'payment_method'
});
module.exports = paymentMethod;

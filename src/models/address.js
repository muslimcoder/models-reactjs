const { Model, DataTypes } = require('sequelize');
const DBCONNECTION = require('../configs/db');
//const t = await sequelize.transaction();

class Address extends Model {
  static associate(models){

  }
  static get() {
   const address = this.findByPk(1, {raw: true}); 
   // this.create(data)
   return address
  }
};

Address.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.BIGINT
  },
  address: {
    type: DataTypes.TEXT
  },
  userId: {
    type: DataTypes.BIGINT
  },
  provinceName: {
    type: DataTypes.STRING
  },
  city: {
    type: DataTypes.STRING
  },
  subDistrict: {
    type: DataTypes.STRING
  },
  postalCode: {
    type: DataTypes.STRING
  }
},{
  sequelize: DBCONNECTION,
  timestamps: false,
  underscored: true,
  modelName: 'Address',
  tableName: 'address'
});
module.exports = Address;

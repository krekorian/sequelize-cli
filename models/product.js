'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    amount: DataTypes.INTEGER
  }, {
    timestamps:false
  });
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};
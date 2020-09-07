'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    productName: DataTypes.STRING,
    img: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    category: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};
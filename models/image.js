'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: DataTypes.INTEGER,
    urlImage: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.Bar,{as: 'Bars', foreignKey: 'barId'})
  };
  return Image;
};
'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Shout', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    content: DataTypes.TEXT,
    date: DataTypes.NOW 
  });
};

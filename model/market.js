/**
 * @author Victor Palma
 * @description ORM file that maps to wp_nts_market MySQL Table
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  
  return sequelize.define('wp_nts_market', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    affiliate_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    market_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    epsilon_ouid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    epsilon_transaction_tableid: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    timestamps: false,
    underscored: true,
    freezeTableName:true,
    tableName: 'wp_nts_market'
  });
};

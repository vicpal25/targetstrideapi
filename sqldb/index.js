/**
 * Sequelize initialization module
 */


'use strict';

const path = require('path');

const config = require('../config/environment/development');
const Sequelize = require('sequelize');


var db = {
  Sequelize: Sequelize,
  sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
};

db.Market = db.sequelize.import('../model/market');

module.exports = db;

/**
 * Sequelize initialization module
 */


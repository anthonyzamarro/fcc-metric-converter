/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res, next){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString;
    
      if (initUnit == 'Invalid unit' && initNum == 'Invalid number') {
        toString = 'Invalid number and unit';
      } else {
        toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      }

      res.send(toString);
      // next();
    });
    
};

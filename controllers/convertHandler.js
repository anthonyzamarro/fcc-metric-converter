/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {

  // check for double fraction
  const _hasDoubles = (number) => {
    let doubleFraction = number.split('').some(function(v,i,a){
     return a.lastIndexOf(v)!=i;
    });
    return doubleFraction;
  }

  const _divided = (number) => {
    let divided = number.split('/')
        .map(n => parseFloat(n));
    return divided.reduce((a,c) => a / c);
  }
  
  this.getNum = function(input) {
    var result;
    let num = input.split(/[a-zA-Z]/gi)[0];

    // return 1 if input is empty string
    if (num === '') result = 1;

    if (parseFloat(num)) result = num;
    // check if input is a fraction
    if(num.includes('/')) {
      // has double fractions
      if (_hasDoubles(num)) { 
        result = 'Invalid number';
        return result;
      }

      // has decimal with fractions
      // if (num.includes('.')) {
      //   result = _decimalWithFraction(num);
      //   return result;
      // } else {
      //   result = 
      // }
      result = _divided(num);
      return result;

    } else {
      if (num.includes('.')) {
        // has double decimals
        if (_hasDoubles(num)) {
          result = 'Invalid number';
          return result;
        }
      }

    }
    // console.log(`result ${result}`)
    return result;
  };
  
  
  
  this.getUnit = function(input) {
    const units = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    let unit = input.split(/[^a-zA-Z]/gi).join(''), result;
    if (!units.includes(unit)) {
      result = 'Invalid unit';
    } else {
      result = unit;
    }
    console.log(`result ${result}`);
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;

/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {

  // check for double fraction or decimal point
  const _hasDoubles = (number) => {
    let doubles = number.split('').some(function(v,i,a){
      if (!v.match(/[\d]/)) return a.lastIndexOf(v)!=i;
    });
    return doubles;
  }
  
  // divide two numbers
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
    
    

    if (!num.includes('/')) {
      if (_hasDoubles(num)) {
        return result = 'Invalid number'
      } else {
        return result = parseFloat(num);
      }
    } else {
      if (_hasDoubles(num)) {
        return result = 'Invalid number'
      } else {
        result = _divided(num);
        return result;
      }
    }

    // console.log(`result ${result} ${typeof result}`)

    // if (parseFloat(num)) result = num;
    // check if input is a fraction
    // if(num.includes('/')) {
    //   // has double fractions
    //   if (_hasDoubles(num)) { 
    //     result = 'Invalid number';
    //     return result;
    //   }

    //   // has decimal with fractions
    //   if (num.includes('.')) {
    //     result = _divided(num);
    //     return result;
    //   }
    //   result = _divided(num);
    //   return result;

    // } else {
    //   if (num.includes('.')) {
    //     // has double decimals
    //     if (_hasDoubles(num)) {
    //       result = 'Invalid number';
    //       return result;
    //     } else { 
    //       result = num;
    //       return result;
    //     }
    //   }

    // }
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
    // console.log(`getUnit result ${result}`);
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
      switch(initUnit) {
        case 'gal':
        case 'GAL':
          result = 'l';
          break;
        case 'mi':
        case 'MI':
          result = 'km';
          break;
        case 'lbs':
        case 'LBS':
          result = 'kg';
          break;
        case 'l':
        case 'L':
          result = 'gal';
          break;
        case 'km':
        case 'KM':
          result = 'mi';
          break;
        case 'kg':
        case 'KG':
          result = 'lbs';
          break;
        default:
          result = 'Invalid unit';
      }
    // console.log(`initUnit result ${result}`)
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch(unit) {
      case 'l':
        result = 'liters';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
      case 'gal':
        result = 'gallons';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'L':
        result = 'Liters';
        break;
      case 'Mi':
        result = 'Miles';
        break;
      case 'Km':
        result = 'Kilometers';
        break;
      case 'Gal':
        result = 'Gallons';
        break;
      case 'Lbs':
        result = 'Pounds';
        break;
      case 'Kg':
        result = 'Kilograms';
        break;
      default:
        result = 'Invalid unit';
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    let result;
    let parsedInit = parseFloat(initNum);
    const galToL = 3.78541;
    const ltoGal = 0.26417;
    const lbsToKg = 0.453592;
    const kgToLbs = 2.20462;
    const miToKm = 1.60934;
    const kmToMi = 0.62137;
    // console.log(`initNum ${initNum} initUnit ${initUnit}`);
    switch(initUnit) {
      case 'gal':
      case 'GAL':
       result = (galToL * parsedInit).toFixed(5);
       break;
      case 'l':
      case 'L':
        result = (ltoGal * parsedInit).toFixed(5);
        break;
      case 'lbs':
      case 'LBS':
        result = (lbsToKg * parsedInit).toFixed(5);
        break;
      case 'kg':
      case 'KG':
        result = (kgToLbs * parsedInit).toFixed(5);
        break;
      case 'mi':
      case 'MI':
        result = (miToKm * parsedInit).toFixed(5);
        break;
      case 'km':
      case 'KM':
        result = (kmToMi * parsedInit).toFixed(5);
        break;
      default: 
        result = 'Does not compute';
    }
    
    
    return parseFloat(result);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = {
      initNum: initNum, 
      initUnit: initUnit, 
      returnNum: returnNum, 
      returnUnit: returnUnit, 
      string: `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    };
    
    return result;
  };
  
}

module.exports = ConvertHandler;
'use strict';

function _normalize(min, max, num){
  if(num<=min) return min;
  if(num>=max) return max;
  if(num==69) return 1;
  return parseInt(num);
}

function _cardinalNumber(num){
  let _number = _normalize(1,99,num);
  
  switch (_number) {
    case 1: return 'one';
    case 2: return 'two';
    case 3: return 'three';
    case 4: return 'four';
    case 5: return 'five';
    case 6: return 'six';
    case 7: return 'seven';
    case 8: return 'eight';
    case 9: return 'nine';
    case 10: return 'ten';
    case 11: return 'eleven';
    case 12: return 'twelve';
    case 13: return 'thirteen';
    case 14: return 'fourteen';
    case 15: return 'fifteen';
    case 16: return 'sixteen';
    case 17: return 'seventeen';
    case 18: return 'eighteen';
    case 19: return 'nineteen';
    case 20: return 'twentie';
    case 30: return 'thirty';
    case 40: return 'forty';
    case 50: return 'fifty';
    case 60: return 'sixty';
    case 70: return 'seventy';
    case 80: return 'eighty';
    case 90: return 'ninety';
    default:
      if(_number>=21){
        let d = _number.toString().split("").shift()*10;
        let u = _number.toString().split("").pop();
        return [d,u].map(_cardinalNumber).join(" ")
      }
      throw new Error("ups! could not generate with " + _number)
  }
  
}


function _randLineFromFile(file){
  const words = require('fs').readFileSync(file).toString().split("\n")
  const rand = Math.round(Math.random()*words.length)
  const index  = _normalize(0,words.length, rand)

  
  return words[index];
}


function generate() {
  return  [
      _cardinalNumber(Math.random()*100),
      _randLineFromFile('./data/words.txt'),
      _randLineFromFile('./data/animals.txt') + "s"
      ].join(" ");
}

module.exports = {
  _randLineFromFile,
  _cardinalNumber,
  _normalize,
  generate
}

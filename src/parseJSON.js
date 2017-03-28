// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  json = json.trim();
  var NUMBERS = ['0','1','2','3','4','5','6','7','8','9','.','-'];
  var nums = json.split('');
  var condition = nums.every(function(x) {
    return NUMBERS.includes(x);
  });
  
  if (json === 'true') {
    return true;
  }
  else if (json === 'false') {
    return false;
  }
  else if (json === 'undefined') {
    return undefined;
  }
  else if (json === 'null') {
    return null;
  }
  else if (json[0] === '"' && json[json.length - 1] === '"') {
    return json.slice(1, json.length - 1);
  }
  else if (condition) {
    return parseFloat(json);
  }
  else if (json === '[]') {
    return [];
  }
  
  else if (json[0] === '[' && json[json.length - 1] === ']') {
    var arrayOutput = [];
    var arrayContent = json.slice(1, json.length - 1).split(',');
    for (var i = 0; i < arrayContent.length; i++) {
      arrayOutput.push(parseJSON(arrayContent[i]));
      
    }
    return arrayOutput;
  }
  
  // object
  else if (json === '{}') {
    return {};
  }
  // else if (json[0] === '{' && json[json.length - 1] === '}') {
  //  var objOutput = {};
  //  var objContent = json.slice(1, json.length - 1).split(', ');
  //  for (var j = 0; j < objContent.length; j++) {
  //    var colon = objContent[j].indexOf(':');
  //    var key = parseJSON(objContent[j].slice(0, colon));
  //    var value = parseJSON(objContent[j].slice(colon + 2));
  //    console.log(objContent[j].slice(colon + 1));
  //    objOutput[key] = value;
  //  }
  //  return objOutput;
  // }

  else if (json[0] === '{' && json[json.length - 1] === '}') {
    var objOutput = {};
    
    var objContent = json.slice(1, json.length - 1);

    var count = 0;

    for (var j = 0; j < objContent.length; j++) {
      if (objContent[j] === '"') {
        count++;
      }
    }

    var start = 0;
    var end, key, property
    var remainder = objContent.slice(1);

    // init store start quote index
    for (var k = 0; k < count; k++) {
      end = remainder.indexOf('"') + (objContent.length - remainder.length);
      if (key === undefined) {
        var test = objContent.slice(start + 1, end); 
        if (test !== ':') {
          key = test;
        }
      } 
      else {
        var test2 = objContent.slice(start + 1, end).trim(); 
        console.log(test2)
        if (test2 + '' !== ':') {
          property = test2;
          console.log(property);
          if (property[property.length - 1] === ',') {
            var property = property.slice(0, property.length - 1);
          }
          console.log(property);
          objOutput[key] = property;
          key = undefined;
        }
      }
      start = end;
      remainder = objContent.slice(end + 1);
    }

    // init store end quote index
    // init store key
    // init store property
    // init store remainder of string

    // loop
      // update


    return objOutput;
  }


  // else {
  //  throw new SyntaxError();
  // }
};

  


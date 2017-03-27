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
  else if (json === '{}') {
    return {};
  }
  else if (json[0] === '{' && json[json.length - 1] === '}') {
  	var objOutput = {};
  	var objContent = json.slice(1, json.length - 1).split(', ');
  	for (var j = 0; j < objContent.length; j++) {
  	  var colon = objContent[j].indexOf(':');
  	  var key = parseJSON(objContent[j].slice(0, colon));
  	  var value = parseJSON(objContent[j].slice(colon + 2));
  	  console.log(objContent[j].slice(colon + 1));
  	  objOutput[key] = value;
  	}
  	return objOutput;
  }
  // else {
  // 	throw new SyntaxError();
  // }
};

  


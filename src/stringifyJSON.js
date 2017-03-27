// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  if (typeof obj === 'boolean' || typeof obj === 'number' || obj === null) {
  	return ''+obj;
  }

  if (typeof obj === 'string') {
  	return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
  	var result = [];
  	for (var i = 0; i < obj.length; i++) {
  	  result.push(stringifyJSON(obj[i]));
  	}
  	return '[' + result.join(',') + ']';
  }


  if (typeof obj === 'object') {
  	var objOutput = [];
  	for (var prop in obj) {
  	  if (typeof obj[prop] === 'function' || obj[prop] === undefined) {
  	  	continue;
  	  }
  	  else {
		objOutput.push(stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]));
  	  }
  	}
  	return '{' + objOutput.join(',') + '}';
  }
};

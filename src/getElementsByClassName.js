// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // create array to store matching className elements
  var output = [];

  // starts search function
  var search = function(element) {
  	var nodes = element.childNodes;

  	for (var i = 0; i < nodes.length; i++) {
  	  console.log(nodes[i].classList);
  	  if (nodes[i].classList !== undefined && nodes[i].classList.contains(className)) {
  	  	output.push(nodes[i]);
  	  }
  	  
  	  if (nodes[i].childNodes.length >= 1) {
  	    search(nodes[i]);
  	  }
  	}
  }
  //console.log(output);
  search(document);
  return output;
  	// iterates over elements
  	  // if element = className
  	    // save element in array
  	  // if element has children
  	    // call function on elements children


  // run search function on document
  // return search function result on document.body

};

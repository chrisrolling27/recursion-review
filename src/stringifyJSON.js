// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //stringify easy stuff first: numbers, boolean, undefined, NaN should be null, infinity should be null, dates
  //objects and arrays next
  //why does triple equals fail this?

  var type = typeof(obj);

  if (type === 'number' || type === 'boolean') {
    //comeback to this, may not work recursively
    return String(obj);
  }

  if (type === 'string') {
    var result = '"' + obj + '"';
    return result;
  }

  if (Array.isArray(obj)) {
    let result = [];
    for (var i = 0; i < obj.length; i++) {
       result.push(stringifyJSON(obj[i]));
    }
    return "[" + result + "]";
  }


  if (type === 'object' && obj) {
    let result = [];

    if (Object.keys(obj).length === 0 && obj !== undefined) {
      return '{}';
    }

    for (var key in obj) {
    if (typeof obj[key] === 'function' || obj[key] === undefined) {
      continue;
    }
     result.push(JSON.stringify(key) + ':' + JSON.stringify(obj[key]));
    }

    return "{" + result + "}";

  }


return 'null';

};

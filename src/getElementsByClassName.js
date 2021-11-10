// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  // your code here
  //document body if no default input
  var node = node || document.body;

  var outputArr = [];

  //console.log(node);

  var classList = node.classList;
  //console.log(classList);

  if (classList.contains(className)) {
    outputArr.push(node);
    //console.log(outputArr);
  }


  //iterate through all elements, check if they have a class name
  var arrChild = node.children;
  //console.log(arrChild);

  for (var i=0; i < arrChild.length; i++) {
    //console.log(i);
    //console.log(arrChild[i]);
    outputArr = outputArr.concat(getElementsByClassName(className, arrChild[i]));
    //console.log(outputArr);
  }
  return outputArr;

};


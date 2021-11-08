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

  console.log(node);

  if (node.className === className) {
    outputArr.push(node);
    console.log(outputArr);
  }
  //iterate through all elements, check if they have a class name
  var arrChild = node.children;
  console.log(arrChild);

  for (var i=0; i < arrChild.length; i++) {
    console.log(i);
    console.log(arrChild[i]);
    getElementsByClassName(className, arrChild[i]);
  }
  return outputArr;

};


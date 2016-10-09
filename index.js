function iterativeLog(array) {
  array.forEach(log = (element,index,aray) => {console.log(`${index}: ${array[index]}`)});
} //need to pass 3 arguments to the log function

function iterate(callback) {
  var array = ['cookie', 'cheese', 'tomato'];
  array.forEach(callback);
  return array;
}
function doToArray(array, callback) {
  array.forEach(callback);
}

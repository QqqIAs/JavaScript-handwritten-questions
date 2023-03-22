//es5
const sumFnArguments = function() {
  let sum = 0
  Array.prototype.forEach.call(arguments, (item) => {
    sum += item * 1
  })
  return sum
}

//es6
function sum(...nums) {
  let sum = 0
  nums.forEach(function(item) {
      sum += item * 1
  })
  return sum
}
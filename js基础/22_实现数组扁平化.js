let arr = [1, [2, [3, 4, 5]]]
function faltten(arr) {
  let result = []
  for(let i of arr) {
    if(Array.isArray(i)) {
      result = result.concat(faltten(i))
    }
    else {
      result.push(i)
    }
  }
  return result
}

console.log(faltten(arr))


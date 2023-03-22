let arr = [1, [2, [3, 4, 5]]]

const faltten = function(arr, depth) {
  if(!Array.isArray(arr) || depth <= 0) return arr
  let res = []
  for(let i of arr) {
    if(Array.isArray(i)) {
      res = res.concat(faltten(i, depth - 1))
    }
    else {
      res.push(i)
    }
  }
  return res
}

console.log(faltten(arr , 2))
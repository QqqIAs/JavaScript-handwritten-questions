const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

function uniqueArray(arr) {
  let map = {}
  let res = []
  for(let i of arr) {
    if(!map[i]) {
      map[i] = 1
      res.push(i)
    }
  }
  return res
}

console.log(uniqueArray(array))
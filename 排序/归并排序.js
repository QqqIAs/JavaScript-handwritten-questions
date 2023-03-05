const merge = (left, right) => {
  const result = []
  while(left.length && right.length) {
    if(left[0] <= right[0])  
      result.push(left.shift())
    else 
      result.push(right.shift())
    }
  while(left.length) 
      result.push(left.shift())
  while(right.length) 
      result.push(right.shift()) 

  return result
}

const mergeSort = arr => {
  let len = arr.length
  if(len < 2)
    return arr
  let mid = Math.floor(len / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right))
}

let arr = [1,4,5,2,6,2,7,5,0,78]
console.log(mergeSort(arr))
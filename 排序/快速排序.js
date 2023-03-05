//splice方法以数组的形式返回被删除的元素

const quickSort = arr => {
  let len =arr.length
  if(len < 2) 
    return arr
  let mid = Math.floor(len / 2)
  let result = arr.splice(mid, 1)  //splice取中间值组成新数组
  let midValue = result[0]  //中间值
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] < midValue)
    left.push(arr[i])
    else
    right.push(arr[i])
  }
  return quickSort(left).concat(midValue, quickSort(right))
}

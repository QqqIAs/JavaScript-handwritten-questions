//减量为2倍
const shellSort = arr => {
  let len = arr.length
  let gap = Math.floor(len / 2)
  for(gap; gap >= 1; gap = Math.floor(gap / 2)) {
    for(let i = gap; i < len; i++) {
      for(let j = i - gap; j >=0 && arr[j] > arr[j + gap]; j -= gap) {
        let temp = arr[j]
        arr[j] = arr[j + gap]
        arr[j + gap] = temp    
      }
    }
  }
  return arr
}

const array = [35, 33, 42, 10, 14, 19, 27, 44, 0];
const newArr = shellSort(array);
console.log('newArr:', newArr);
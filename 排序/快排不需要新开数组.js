// let arr = [3,4,2,66,7,8876,96,64,64,22,4,51,1]

// let swap = function(arr,i,j) {
//   [arr[i], arr[j]] = [arr[j], arr[i]]
// }

// function patition(arr, i, j) {
//   let p = arr[i]
//   let index = i
//   while(i < j) {
//     while(arr[j] >= p && i<j) {
//       j--
//     }
//     while(arr[i] < p && i<j) {
//       i++
//     }
//     swap(arr, i, j)
//   }
//   swap(arr, index, i)
//   return i
// }

// let quicksort = function(arr, i, j) {
//   if(i >= j) return
//   let p = patition(arr, i, j)
//   quicksort(arr, i, p-1)
//   quicksort(arr, p+1, j)
// }

// quicksort(arr,0,arr.length-1)
// console.log(arr)
let arr = [3,4,2,66,7,8876,96,64,64,22,4,51,1]

let swap = function(arr,i,j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function patition(arr, i, j) {
  let p = arr[i]
  let index = i
  while(i < j) {
    while(arr[j] > p && i<j) {
      j--
    }
    while(arr[i] <= p && i<j) {
      i++
    }
    swap(arr, i, j)
  }
  swap(arr, index, i)
  return i
}

let quicksort = function(arr, i, j) {
  if (i >= j) return; // 基础情况
  let p = patition(arr, i, j)
  quicksort(arr, i, p-1)
  quicksort(arr, p+1, j)
}

quicksort(arr,0,arr.length-1)
console.log(arr)
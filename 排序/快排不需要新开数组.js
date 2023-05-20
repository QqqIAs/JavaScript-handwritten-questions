/*
 * @Author: QqqIAs 1982421402@qq.com
 * @Date: 2023-03-30 10:48:55
 * @LastEditors: QqqIAs 1982421402@qq.com
 * @LastEditTime: 2023-04-05 22:29:39
 * @FilePath: \手写\手写题\排序\快排不需要新开数组.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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

let swap = function (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

function patition(arr, i, j) {
  let p = arr[i];
  let index = i;
  while (i < j) {
    while (arr[j] > p && i < j) {
      j--;
    }
    while (arr[i] <= p && i < j) {
      i++;
    }
    swap(arr, i, j);
  }
  swap(arr, index, i);
  return i;
}

let quicksort = function (arr, i, j) {
  if (i >= j) return; // 基础情况
  let p = patition(arr, i, j);
  quicksort(arr, i, p - 1);
  quicksort(arr, p + 1, j);
};

let arr = [123, 42, 3, 4, 543, 3, 424, 6464, 2224, 21, 1];
quicksort(arr, 0, arr.length - 1);
console.log(arr);

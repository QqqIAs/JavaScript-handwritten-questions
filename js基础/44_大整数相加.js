/**
 * 大整数相加
 * @param {string} a 
 * @param {string} b 
 */

function bigIntAdd (a, b) {
  // 进位元素
  let carry = 0
  let length = Math.max(a.length, b.length)
  // 补零操作
  a.padStart(length, '0')
  b.padStart(length, '0')
  let res = ''
  for(let i = length - 1; i >= 0; i--) {
    let sum = (parseInt(a[i]) + parseInt(b[i]) + carry)
    res = (sum % 10) + res
    carry = Math.floor(sum / 10)
  }
  if(carry) res = 1 + res;
  return res
}

console.log(bigIntAdd('623', '689'))
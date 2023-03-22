//reduce接受两个参数，第一个是callback函数，第二个是初始值（可选）
//callback函数接受4个参数：累加器、当前值、当前索引、原数组；

Array.prototype._reduce = function (callback, originValue) {
  let originArr = this
  let accumulate = originValue === undefined? originArr[0] : originValue
  for(let i = 0, len = originArr.length; i < len; i++) {
    if(originValue === undefined && i+1 == originArr.length ) break
    accumulate = callback(accumulate, originValue === undefined? originArr [i + 1]: originArr [i], i, originArr)
  }
  return accumulate
}
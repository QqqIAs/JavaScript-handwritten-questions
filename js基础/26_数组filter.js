Array.prototype._filter = function(fn) {
  let res = []
  for(let i = 0, len = this.length; i < len; i++) {
    if(fn(this[i]))
    res.push(this[i])
  }
  return res
}
Array.prototype._map = function(fn) {
  let res = []
  for(let i = 0, len = this.length; i < len; i++) {
    let value = fn(this[i])
    res.push(value)
  }
  return res
}
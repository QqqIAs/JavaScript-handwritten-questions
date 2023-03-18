function instance(left, right) {
  let leftPro = Object.getPrototypeOf(left)
  while(true) {
    if(!leftPro) return false
    if (leftPro == right.prototype) return true
    leftPro = Object.getPrototypeOf(leftPro)
  }
}
function foo(name, age) {
  console.log(this,name,age)
}

Function.prototype.hyBind = function(thisArg, ...otherArg) {
  thisArg = (thisArg == null || thisArg == undefined) ? window : Object(thisArg)
  Object.defineProperty(thisArg, 'fn', {
    value: this,
    configurable: true
  })
  return (...newArg) => {
    let arg = otherArg.concat(newArg)
    thisArg.fn(...arg)
  }

}

let newfn = foo.hyBind(null, 'coder')
newfn(18)
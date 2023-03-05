function foo(name, age) {
  console.log(this,name,age)
}

Function.prototype.hyApply = function(thisArg, otherArg) {
  thisArg = (thisArg === null || thisArg === undefined) ? window : Object(thisArg)
  Object.defineProperty(thisArg, 'fn', {
    value: this,
    configurable: true,
    enumerable: false
  })
  thisArg.fn(...otherArg)
  delete thisArg.fn
}

foo.hyApply(null, 'coder' , 18)



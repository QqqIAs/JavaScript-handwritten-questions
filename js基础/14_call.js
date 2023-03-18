function foo(name, age) {
  console.log(this,name,age)
}

Function.prototype.hyCall = function(thisArg, ...otherArg) {
  thisArg = (thisArg === null || thisArg === undefined) ? globalThis : Object(thisArg)
  Object.defineProperty(thisArg, 'fn', {
    value: this,
    configurable: true,
    enumerable: false
  })
  thisArg.fn(...otherArg)
  delete thisArg.fn
}

foo.hyCall({new: 'sb'}, 'coder' , 18)
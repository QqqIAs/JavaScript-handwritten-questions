function hycurry(fn) {
  return function curried(...args) {
    if(args.length >= fn.length) return fn.apply(this,args)
    else {
      return function(...newagrs) {
        return curried.apply(this,args.concat(newagrs))
      }
    }
  }
}

function foo(a,b,c) {
  console.log(a+b+c)
}

let newfn = hycurry(foo)
newfn(1)(3)(10)
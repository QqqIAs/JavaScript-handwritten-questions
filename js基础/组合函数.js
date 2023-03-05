function compose(...fns) {   
  if(fns.length <= 0) {
    throw console.error('less of function')
  } 
  for(let fn of fns) {
    if(typeof fn !== 'function')
    throw console.error('not a function');
  }
  
  return function (...args) {
    let result = fns[0](...args)
    for(let i = 1;i < fns.length; i++) {
      result = fns[i](result)
    }
    return result
  }
}

function pow(x) {
  return x**2
}

function double (x) {
  return x*2
}

let newfn = compose(double, pow)
console.log(newfn(5))
function deepCopy(originObj, map = new WeakMap()) {
  if(!originObj || typeof originObj !== 'object') return originObj
  if(map.get(originObj)) {
    return map.get(originObj)
  }
  let newobj = Array.isArray(originObj) ? [] : {}
  map.set(originObj,newobj)
  for(let key in originObj) {
    newobj[key] = deepCopy(originObj[key], map)
  }
  return newobj
}


let obj = {
  name: '13',
  age: 10,
  obj1: {
    address : 'china',
    obj: {
      name: 'qqq'
    }
  },
}



// newobj.obj1.address = 'us'

// console.log(newobj.obj1.address)
// console.log(obj.obj1.address)
let newobj = deepCopy(obj)
newobj.obj1.obj.name = 'adc'
console.log(obj.obj1.obj.name)
console.log(newobj.obj1.obj.name)
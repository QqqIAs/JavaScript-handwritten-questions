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
    address : 'china'
  },
  obj: {
    name:'coder'
  }
}



// newobj.obj1.address = 'us'

// console.log(newobj.obj1.address)
// console.log(obj.obj1.address)
let newobj = deepCopy(obj)
newobj.obj.name = 'adc'
console.log(newobj.obj.name)
console.log(obj.obj.name)
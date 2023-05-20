function deepCopy(obj) {
  if(!obj || typeof obj !== 'object') return

  let newobj = Array.isArray(obj)? [] : {}

  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      newobj[key] = typeof obj[key] == 'object'? deepCopy(obj[key]) : obj[key]
    }
  }

  return newobj
}

// let obj = {
//   name: '13',
//   age: 10,
//   obj1: {
//     address : 'china'
//   }
// }


// let newobj = deepCopy(obj)

// newobj.obj1.address = 'us'

// console.log(newobj.obj1.address)
// console.log(obj.obj1.address)

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
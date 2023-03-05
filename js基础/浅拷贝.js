function shallow(obj) {
  if(!obj || typeof obj !== "object") return

  let newobj = Array.isArray(obj) ? [] : {}

  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      newobj[key] = obj[key]
    }
  }
  return newobj
}

let obj = {
  name: '13',
  age: 10
}
obj.__proto__.address = 'china'
let newobj = shallow(obj)

console.log(newobj.address)

//hasOwnProporty有一个缺点，对于隐式原型指向null的对象，查找不出来
let obj1 = Object.create(null)
obj1.name = '131'
// console.log(obj1.hasOwnProperty('name')) //报错  因为对象的原型已经被修改，hasOwnpropoty为原型方法，及实例方法已经消失
console.log(Object.hasOwn(obj1, 'name'))
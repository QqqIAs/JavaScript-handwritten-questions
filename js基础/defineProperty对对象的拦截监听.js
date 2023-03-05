let obj = {
  name:'123',
  age: 18
}

Object.keys(obj).forEach((item) => {
  let value = obj[item]
  Object.defineProperty(obj, item, {
    set: function(newvalue) {
      console.log("set方法")
      value = newvalue
    },
    get: function() {
      console.log("get方法")
      return value
    }
  })
})

obj.name = 'eada'
console.log(obj.name)
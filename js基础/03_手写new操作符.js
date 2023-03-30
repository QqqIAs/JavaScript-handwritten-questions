function hynew () {
  let newobj = null
  let result = null
  let constructor = Array.prototype.shift.call(arguments)
  //判断是否是函数
  if(typeof constructor !== 'function')
  throw console.error('not a function')
  //原型指向
  newobj = Object.create(constructor.prototype)
  //this指向  并执行代码
  result = constructor.call(newobj,...arguments)
  //判断返回对象
  let flag = result &&(typeof result == 'object' || typeof result == 'function')
  return flag? result : newobj
}

//实验
function foo(name,age) {
  this.name = name
  this.age = age
  this.running = function () {
    console.log('running')
  }
}

let newobj = hynew(foo, 'coder', 18)
console.log(newobj.age)
newobj.running()


//  hynew(构造函数，初始化参数)


//new 操作符过程  1.创建一个新的对象  2。原型指向  3. this指向   4.执行代码内容   5.返回对象
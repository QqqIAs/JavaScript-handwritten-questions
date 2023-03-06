const obj = {
  name: 'why',
  age: 18
}

//设置一个专门执行响应式的函数
const reactiveFns = []

function watchFn(fn) {
  reactiveFns.push(fn)
  fn()
}

watchFn(function foo() {
  console.log('foo:', obj.name)
  console.log('foo:', obj.age)
  console.log('foo funcition')
})
watchFn(function bar() {
  console.log('bar:', obj.name + ' hello')
  console.log('bar:', obj.age + 10)
  console.log('bar funcition')
})

obj.name = 'kobe'
reactiveFns.forEach(fn => {
  fn()
})

//上述的watchFn收集我们需要响应式执行的函数，并且保存到一个数组中。
//但是数组存在一个问题，就是不能很好的管理，如果对象很多，就不能有效区分
//我们可以把数组改为封装一个类来管理对某一个对象所有的依赖
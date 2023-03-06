class Depend {
  constructor() {
    this.reactiveFns = new Set() // 这里可以使用set 避免函数重新执行
  }
  addDepend() {
    if (reactiveFn) {
      this.reactiveFns.add(reactiveFn)
    }
  }
  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}
const objMap = new WeakMap()
let reactiveFn = null
function getDepend(obj, key) {
  // 1 根据对象obj找到对应的map对象
  let map = objMap.get(obj)
  if (!map) {
    map = new Map()
    objMap.set(obj, map)
  }
  // 2 根据key,在obj的map对象中找到dep对象
  let dep = map.get(key)
  if (!dep) {
    dep = new Depend()
    map.set(key, dep)
  }
  return dep
}
const obj = {
  name: 'feiyu',
  age: 18,
  address: '北京',
}
Object.keys(obj).forEach(key => {
  let value = obj[key]
  Object.defineProperty(obj, key, {
    set: function (newValue) {
      const dep = getDepend(obj, key)
      value = newValue
      dep.notify()
    },
    get: function () {
      const dep = getDepend(obj, key)
      dep.addDepend() // 这里可以不传参，直接使用reactiveFn
      return value
    },
  })
})

const dep = new Depend()
// 设置一个专门执行响应式函数的一个函数
function watchFn(fn) {
  reactiveFn = fn
  console.log('reactiveFn', reactiveFn)
  fn()
  reactiveFn = null
}
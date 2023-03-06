class Depend {
  constructor() {
    this.reactiveFns = []
  }
  addDepend(fn) {   
    if(fn) {
      this.reactiveFns.push(fn)
    }
  }
  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

const dep = new Depend()

function watchFn(fn) {
  dep.addDepend(fn)
  fn()
}

Object.keys(obj).forEach(key => {
  let value = obj[key]
  Object.defineProperty(obj, key, {
    set: function(newvalue) {
      value = newvalue
      dep.notify()
    },
    get: function() {
      return value
    }
  })
})
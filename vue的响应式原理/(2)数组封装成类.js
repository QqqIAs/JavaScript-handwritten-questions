class Depend {
  constructor() {
    this.reactiveFns = []
  }
  addDepend(fn) {   
    if(fn) {
      this.reactiveFns.push(fn)
    }
  }
  notifyDepend() {
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
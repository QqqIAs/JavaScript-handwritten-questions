class homeMadeEventBus {
  constructor() {
    this.eventMap = {}
  }
  on(eventName,eventFn) {
    let eventFns = this.eventMap[eventName]
    if(!eventFns) {
      eventFns = []
      this.eventMap[eventName] = eventFns 
    }
    eventFns.push(eventFn)
  }

  emit(eventName, ...args) {
    let eventFns = this.eventMap[eventName]
    if(!eventFns) return
    eventFns.forEach((fn) => {
      fn(...args)
    })
  }

  off(eventName, eventFn) {
    let eventFns = this.eventMap[eventName]
    if(!eventFns) return
    eventFns.forEach((fn, index) => {
      if(fn == eventFn) {
        eventFns.splice(index, 1)
      }
    })

    if(eventFns.length == 0) {
      delete this.eventMap[eventName]
    }
  }
}

//测试
const bus = new homeMadeEventBus()
const studio = function() {
  console.log('123')
}
bus.on('click', studio)

bus.emit('click', studio)
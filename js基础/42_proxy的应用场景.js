// 逻辑分离的数据格式验证器
const target = {
  _id : 1024,
  name: 'vuejs'
}

const validators = {
  name(val) {
    return typeof val === 'string'
  },
  _id(val) {
    return typeof val === 'number' && val > 1023
  }
}

const createValidator = (target, validator) => {
  return new Proxy(target, {
    _validator: validator,
    set(target, propKey, value, proxy) {
      let validator = this._validator[propKey](value)
      if(validator)
        return Reflect.set(target, propKey, value, proxy)
      else
        throw Error(`Cannot set ${propKey} to ${value}. Invalid type.`)
    }
  })
}

let proxy = createValidator(target, validators)

proxy.name = 'abc'
proxy.name = 123  //Cannot set name to 123. Invalid type.
proxy._id = 1022  //Cannot set _id to 1022. Invalid type.

//私有属性
const target = {
  _id: 1024,
  name: 'vuejs'
}

const proxy = new Proxy(target, {
  get(target, propKey, proxy) {
    if(propKey[0] === '_')
    throw Error(`${propKey} is restricted`)
    return Reflect.get(target, propKey, proxy)
  },
  set(target, propKey, val, proxy) {
    if(propKey[0] === '_')
    throw Error(`${propKey} is restricted`)
    return Reflect.set(target, propKey, val, proxy)
  }
})

proxy.name // vuejs
proxy._id // Uncaught Error: _id is restricted
proxy._id = '1025' // Uncaught Error: _id is restricted

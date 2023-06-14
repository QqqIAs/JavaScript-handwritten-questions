//PromiseState 初始化promise状态
//PromiseResult 初始化promise结果
//onFulfilledCallbacks 初始化fulfilled函数
//onRejectedCallbacks 初始化Rejected函数
//MACBOOK测试new
class MyPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'

  constructor(func) {
    this.PromiseState = this.PENDING
    this.PromiseResult = null
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []
    try {
      func(this.resolve.bind(this),this.reject.bind(this))
    } catch (error){
      this.reject(error)
    }
  }

  resolve(result) {
    if(this.PromiseState === this.PENDING) {
      this.PromiseState === this.FULFILLED
      this.PromiseResult = result
      this.onFulfilledCallbacks.forEach((callback) => {
        callback(result)
      })
    }
  }

  reject(reason) {
    if(this.PromiseState === this.PENDING) {
      this.PromiseState === this.REJECTED
      this.PromiseResult = reason
      this.onRejectedCallbacks.forEach((callback) => {
        callback(reason)
      })
    }
  }

  //静态方法
  static resolve(value) {
    if(value instanceof MyPromise) {
      return value
    } else {
      return new MyPromise(resolve => {
        resolve(value)
      })
    }
  }
  
  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason)
    })
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      if(Array.isArray(promises)) {
        let res = [] //存储器
        let count = 0 //计数器
        if(promises.length === 0) {
          return resolve(promises)
        }

        promises.forEach((promise, index) => {
          MyPromise.resolve(promise).then((value) => {
            count++
            res[index] = value
            if(count === promises.length) {
              resolve(res)
            }
          }, reason => {
            reject(reason)
          })
        })
      } else {
        return reject(new TypeError('Argument is not iterable'))
      }
    })
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      if(Array.isArray(promises)) {
        if(promises.length > 0) {
          promises.forEach((promise) => {
            MyPromise.resolve(promise).then(resolve, reject)
          })
        }
      } else {
        return reject(new TypeError('Argument is not iterable'))
      }
    })
  }

  static any(promises) {
    return new MyPromise((resolve, reject) => {
      if(Array.isArray(promises)) {
        let errors = [] //收集错误信息
        let count = 0 //计数器
        if(promises.length === 0) return reject(new AggregateError([], 'All promises were rejected'))
        else {
          promises.forEach((promise, index) => {
            MyPromise.resolve(promise).then(value => {
              resolve(value)
            }, reason => {
              count++
              errors[index] = reason
              count === promises.length && reject(errors)
            })
          })
        }
      } else {
        return reject(new TypeError('Argument is not iterable'))
      }
    })
  }

  static allSettled(promises) {
    return new MyPromise((resolve, reject) => {
      if(Array.isArray(promises)) {
        let res = []
        let count = 0
        if(promises.length > 0) {
          promises.forEach((promise, index) => {
            MyPromise.resolve(promise).then(value => {
              count++
              res[index] = {
                status: 'fulfilled',
                value
              }
              count === promises.length && resolve(res)
            }, reason => {
              count++
              res[index] = {
                status: 'rejected',
                reason
              }
              count === promises.length && resolve(res)
            })
          })
        }
      } else {
        return reject(new TypeError('Argument is not iterable'))
      }
    })
  }
}
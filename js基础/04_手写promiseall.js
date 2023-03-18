//all方法中也会返回一个promise对象，并且回调值变为一个数组
function promiseAll(promises) {
  if(!Array.isArray(promises))
    throw new TypeError('argument must be a array')
  return new Promise((resolve, reject) => {
    let length = promises.length
    let res = []
    let counter = 0
    for(let i = 0; i < length; i++) {
      Promise.resolve(promises[i]).then(value => {
        counter ++
        res[i] = value
        if(counter === length)
          resolve(res)
        },err => {
          reject(err)
        }
      )
    }
  })
}

let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
      resolve(1)
  }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
      resolve(2)
  }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
      resolve(3)
  }, 3000)
})

promiseAll([p3, p1, p2]).then(res => {
  console.log(res) // [3, 1, 2]
})
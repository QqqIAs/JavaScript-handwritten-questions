function promiseany(promises) {
  let length = promises.length
  let count = 0
  let result = []
  return new  Promise((resolve, reject) => {
    for(let i = 0;i < length; i ++) {
      Promise.resolve(promises[i]).then(res => {
        resolve([res])
      },err => {
        result[i] = err
        count++
        if(count == length)
        reject(result)
      })
    }
  })
}

let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
      reject(3)
  }, 3000)
})
let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(1)
  }, 1000)
})
let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(5)
  }, 5000)
})

promiseany([p1,p2,p3]).then(res=> {
  console.log(res)
}, err=> {
  console.log(err)
})

function promiseallsettled (promises) {
  let length = promises.length
  let result = []
  let count = 0
  return new Promise((resolve,reject) => {
    for(let i = 0;i < length;i ++) {
      Promise.resolve(promises[i]).then((res) => {
        result[i] = res
        count++
        if(count == length)
        resolve(result)
      }, err => {
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
      resolve(1)
  }, 3000)
})
let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
      resolve(2)
  }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
      reject(3)
  }, 1000)
})

promiseallsettled([p1,p2,p3]).then(res => {
  console.log(res)
})
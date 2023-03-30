function delay(time) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(time)
    }, time);
  })
}

let tasks = [
  () => {return delay(1000)},
  () => {return delay(1003)},
  () => {return delay(1005)},
  () => {return delay(1002)},
  () => {return delay(1004)},
  () => {return delay(1006)},
]


function promisepoll(tasks, pool) {
  poop = pool || 5
  let index = 0
  let result = []
  let together = new Array(pool).fill(null)
  together = together.map((item, i) => {
    return new Promise((resolve, reject) => {
      const run = function() {
        if(index >= tasks.length)
          {
            resolve() 
            return
          }
        let oldindex = index
        let task = tasks[index++]
        task().then((res) => {
          result[oldindex] = res
          console.log(i)
          run()
        },err => {
          reject(err)
        }) 
      }
       run()
    })
  })
  return Promise.all(together).then(() => {
    return result
  })
}

promisepoll(tasks,3).then((res) => {
  console.log(res)
})


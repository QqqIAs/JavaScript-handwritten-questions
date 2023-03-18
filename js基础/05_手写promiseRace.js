function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    for(let i = 0; i < promises.length; i++){
      promises[i].then(resolve, reject)
    }
  })
}
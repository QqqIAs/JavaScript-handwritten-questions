//l利用promise 实现
function sleep(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay)
  })
}
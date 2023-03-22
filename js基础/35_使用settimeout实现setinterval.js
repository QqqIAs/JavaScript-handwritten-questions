function mySetinterval(fn, delay) {
  //实现控制器
  let timer = {
    flag: true
  }

  function interval() {
    if(timer.flag) {
      fn()
      setTimeout(interval, delay);
    }
  }
  //启动定时器
  setTimeout(interval, delay);
  return timer
} 
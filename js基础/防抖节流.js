function homemadeDebouce(fn, delay) { 
  let timer = null
  return function(...args) {
    if(timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
      
    },delay)
  }
}

let counter = 0;
let btn = document.querySelector('.input')
btn.oninput = homemadeDebouce(function(){
        console.log(`发送网络请求${counter++}`,this.value)
    },200)


 // 手写节流 
function throttle(fn, interval) {
  let starttime = 0
  return function(...args) {
    let newtime = new Date().getTime()
    let waittime = interval - (newtime - starttime)
    if(waittime <= 0) {
      fn.apply(this,args)
      starttime = newtime
    }
  }
}


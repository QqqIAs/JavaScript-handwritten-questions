/**
依次顺序执行一系列任务
所有任务全部完成后可以得到每个任务的执行结果
需要返回两个方法，start用于启动任务，pause用于暂停任务每个任务具有原子性，即不可中断，只能在两个任务之间中断 
@param {...Function} tasks 任务列表，每个任务无参、异步
  */

function processTasks(...tasks) {
// 控制运行变量
let isRunning = false
let i = 0
const result = []
return {
  start() {
    return new Promise(async (resolve, reject) => {
      if(isRunning)  return
      isRunning = true
      while(i < tasks.length) {
        console.log('任务开始', i)
      result.push(await tasks[i]())
      console.log('任务结束', i)
      i++
      if(!isRunning)
      return
      }
      isRunning = false
      resolve(result)
    }) 
  },
  pause() {
    isRunning = false
  }
}
}

// 检验
const tasks = []
    for(let i = 0 ; i < 5; i++)
    tasks.push(() => new Promise((resolve) => {
      setTimeout(() => {
        resolve(i)
      }, 2000)
    }))
    const process = processTasks(...tasks)
    start.onclick = async () => {
      console.log('开始')
      const res = await process.start()
      console.log('任务完成', res)
    }

    pause.onclick = () => {
      console.log('暂停')
      process.pause()
    }
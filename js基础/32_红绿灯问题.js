//红灯3s亮一次，绿灯1s亮一次，黄灯2s亮一次

function red() {
  console.log('red');
}
function green() {
  console.log('green');
}
function yellow() {
  console.log('yellow');
}

const task = function(light, timer) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(light == 'red')
        red()
      else if(light == 'green')
        green()
      else if(light == 'yellow')
        yellow()
        resolve()
    }, timer)
  })
}

const step = () => {
  task('red', 3000)
    .then(() => task('green', 2000))
    .then(() => task('yellow', 1000))
    .then(step)
}

step()

//用async、await实现
// const TaskRunner = async () => {
//   await task('red', 3000)
//   await task('green', 2000)
//   await task('yellow', 1000)
//   TaskRunner()
// }

// TaskRunner()
//如果一个函数是死循环或者抛出错误，那么写成void类型就不合适了
//这里就要用到never类型了

function foo(): never {
  while(true) {
    console.log('123')
  }
}

function pushError(): never {
  throw new Error('123')
}

//此外never类型还用于框架或者组件库的提示
function handleMessage(message: number|string) {
  switch (typeof message) {
    case 'string':
      console.log('foo')
      break
    case 'number': 
      console.log('bar')
      break
    default:
      const check: never = message
  }
}

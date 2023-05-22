// 基本用法
function foo<T, K extends keyof T> (obj:T, key: K) {
  console.log(foo(obj,key))
}

const obj = {
  name: 'coder',
  age: 19
}

foo(obj, 'age')
foo(obj, 'coder') //类型“"coder"”的参数不能赋给类型“"name" | "age"”的参数。
export {}
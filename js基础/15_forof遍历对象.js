// //1.类数组的话用Array。from
const obj = {
  0: '133',
  1: '32',
  length: 2
}

let obj1 = Array.from(obj)
for(let i of obj1)
console.log(i)

//给对象添加一个Symbol.iterator 属性，并返回一个next函数

const obj2 = {
  name: 'dad',
  age: 18
}

obj2[Symbol.iterator] = function () {
  let keys = Object.keys(obj2)
  let index = 0
  return {
    next () {
      if(index < keys.length) return {value: obj2[keys[index++]], done: false}
      else return {value: undefined, done: true}
    }
  }
}

for(let i of obj2)
console.log(i)
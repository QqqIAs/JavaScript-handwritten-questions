let str1: "helloword" = 'helloword'

let info = {
  url: 'http://123.com',
  method: 'GET'
}

function request(url: string, method: 'GET'|'POST') {
  console.log('success')
}

request(info.url, info.method) //类型“string”的参数不能赋给类型“"GET" | "POST"”的参数。

//解决方法
//1
request(info.url, info.method as 'GET')  //断言

//2
let newinfo = {
  url: 'http://123.com',
  method: 'GET'
} as const

request(newinfo.url, newinfo.method)
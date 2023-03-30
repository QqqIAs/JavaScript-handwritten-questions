//手撕封装axios的get的请求，要求10s后reject，不用基础超时配置项怎么写

import axios from 'axios'


let server = axios.create({})

export default async function(url,data) {
  return new Promise((resolve,reject) => {
    let timer = setTimeout(() => {
      reject('time out')
    }, 10000)
    server.request({
      method:'GET',
      url,
      data
    }).then((res) => {
      clearTimeout(timer)
      resolve(res)
    })
  })
}
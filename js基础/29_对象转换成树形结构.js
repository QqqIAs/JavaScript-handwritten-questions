/*
// 转换前：
source = [{
            id: 1,
            pid: 0,
            name: 'body'
          }, {
            id: 2,
            pid: 1,
            name: 'title'
          }, {
            id: 3,
            pid: 2,
            name: 'div'
          }]
// 转换为: 
tree = [{
          id: 1,
          pid: 0,
          name: 'body',
          children: [{
            id: 2,
            pid: 1,
            name: 'title',
            children: [{
              id: 3,
              pid: 1,
              name: 'div'
            }]
          }
        }]
*/

let source = [{
  id: 1,
  pid: 0,
  name: 'body'
}, {
  id: 2,
  pid: 1,
  name: 'title'
}, {
  id: 3,
  pid: 2,
  name: 'div'
}]
const jsontoTree = function(arr) {
  let res = []
  if(!Array.isArray(arr))
    return res
  let map = {}
  arr.forEach((item) => {
    map[item.id] = item
  })
  arr.forEach((item) => {
    let parent = map[item.pid]
    if(parent) {
      (parent.chileren || (parent.chileren = [])).push(item)
    }
    else {
      res.push(item)
    }
  })
  return res
}

console.log(jsontoTree(source))
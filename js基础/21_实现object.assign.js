Object.myAssign = function(target, ...objs) {
  let ret = Object(target)
  objs.forEach((obj) => {
    if(obj !== null) {
      for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
          ret[key] = obj[key]
        }
      }
    }
  })
  return ret
}
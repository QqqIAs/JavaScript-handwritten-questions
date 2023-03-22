function deepCopy(obj) {
  if(!obj || typeof obj !== 'object') return 
  let newobj = Array.isArray(obj)? [] : {} 
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      newobj[key] = 
        typeof obj[key] == 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newobj
}
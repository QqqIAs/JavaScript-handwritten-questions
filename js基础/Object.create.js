function create(obj) {
  function f() {}
  f.prototype = obj
  return new f()
}


//试验
function person (age) {
  this.age = age
  }

person.prototype.running = function(){ console.log('213123')}
let per1 = create(person.prototype)
per1.running()



function person (name, age) {
  this.nama = name
  this.age = age
}

person.prototype.eatting = function () {
  console.log('eatting')
}

function student(name, age, sno) {
  person.call(this,name,age)
  this.sno = sno
}

let stu1 = new student(12,'qqqias',1220340)

console.log(stu1.age)
console.log(stu1.sno)
stu1.eatting()
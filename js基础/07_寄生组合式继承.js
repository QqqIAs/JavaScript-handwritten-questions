function inherit(subtype, supertype) {
  let prototype = Object.create(supertype.prototype)
  prototype.constructor = subtype
  subtype.prototype = prototype
}

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

inherit(student, person)

let stu1 = new student(12,'qqqias',1220340)

console.log(stu1.age)
console.log(stu1.sno)
stu1.eatting()
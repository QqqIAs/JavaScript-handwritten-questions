function person(name, age) {
  this.name = name
  this.age = age
}

person.prototype.running = function () {
  console.log('running~')
}

function student(name, age, sno) {
  person.call(this, name, age)
  this.sno = sno
}

let p = new person()
student.prototype = p.__proto__ 

let stu1 = new student('qqq', 18, 122034)

console.log(stu1.name)
console.log(stu1.sno)
stu1.running()
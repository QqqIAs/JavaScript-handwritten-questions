function person () {
  this.name = 'QqqIAs'
}

person.prototype.running = function() {
  console.log('qqqias is running')
}

function student () {
  this.age = 18
}


let p = new person()
// student.prototype = p.__proto__
student.prototype = p

let stu1 = new student()
stu1.running()
console.log(stu1.name)
//缺点是不能给person进行传参，所以需要借用构造函数进行传参
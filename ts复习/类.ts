class Person {
  constructor(public name: string, private _age: number) {}
  set age(newVal: number) {
    this._age = newVal
  }
  get age() {
    return this._age
  }
}

const person1 = new Person('coder', 18)
person1.age = 20
console.log(person1.age)

class PersonNew {
  private _age: number
  set age(newVal) {
    this._age = newVal
  }
  get age() {
    return this._age
  }

  constructor(age: number) {
    this._age = age
  }
}

const person12 = new PersonNew(18)
person12.age = 29
console.log(person12.age)
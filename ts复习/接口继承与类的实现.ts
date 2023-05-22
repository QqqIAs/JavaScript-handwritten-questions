interface person {
  eat: () => void
}

interface animal {
  run: () => void
}

interface student extends person, animal {
  study: () => void
}

class student1 implements person {
  eat() {
    console.log('123')
  }
}
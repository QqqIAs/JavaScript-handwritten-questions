interface ICollection {
  [index: number]: any;
  length: number
}

function Collect(collection: ICollection) {
  for(let i = 0; i < collection.length; i++) {
    console.log(collection[i])
  }
}

const tuple: [string, number] = ['dad', 3]

Collect(tuple)

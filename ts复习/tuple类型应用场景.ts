function useState<T> (state: T): [T, (newState: T) => void] {
  let currentState = state
  const changeState = (newState: T) => {
    currentState = newState
  }
  return [currentState, changeState]
}

const [counter, setCounter] = useState(10)
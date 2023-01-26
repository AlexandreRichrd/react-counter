import { useState } from 'react'
import './App.css'

const App = () => {

  const [count, setCounter] = useState(0)

  function decreaseCounter() {
    if(count != 0){
      setCounter(count-1)
    }
  }

  function increaseCounter() {
    setCounter(count+1)
  }

  return(
    <div className="counter">
      <div className="count">
        <h1>{count}</h1>
      </div>
      <div className="buttons">
        <button className="counter-minus" onClick={decreaseCounter}>-</button>
        <button className="counter-plus" onClick={increaseCounter}>+</button>
      </div>
      
    </div>
  )
}

export default App
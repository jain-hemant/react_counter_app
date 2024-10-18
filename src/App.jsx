import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const buttonIncrement = () => {
    // console.log(count)
    setCount(prev => prev + 1)
  }
  const buttonDecrement = () => {
    count != 0 ? setCount(prev => prev - 1) : 0
  }
  const buttonReset = () => {
    setCount(0)
  }

  return (
    <>
      <div id='root'>
        <div>
          <h2>{count}</h2>
        </div>
        <div>
          <button onClick={buttonDecrement} >-</button>
          <button onClick={buttonIncrement}>+</button>
        </div>
        <div>
          <button onClick={buttonReset}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App

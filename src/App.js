import React from 'react'
import { useState } from 'react'
import Counter from './Components/Counter'
import Header from './Components/Header'




function App() {
  const [count, setCount] = useState(0)
  const updateCounter = () => {
    setCount(
      count+1
    )
  }

  return (
    <div>
      <button onClick={updateCounter}>+</button>
      <Counter count={count}/>
    </div>
  )
}

export default App


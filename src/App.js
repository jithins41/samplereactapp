import React from 'react'
import { useState } from 'react'
import Counter from './Components/Counter'
import Header from './Components/Header'
import Welcome from './Components/Welcome'




function App() {
  // const [count, setCount] = useState(0)
  // const updateCounter = () => {
  //   setCount(
  //     count+1
  //   )
  // }

  // return (
  //   <div>
  //     <button onClick={updateCounter}>+</button>
  //     <Counter count={count}/>
  //   </div>
  // )
  let values = [

    {
      name: 'Jithin',
      age: 26
    },
    {
      name: 'Viji',
      age: 31
    },
    {
      name: 'Bindhu',
      age: 44
    },
  {
    name:'Biji',
    age:40
  }]
  return (
    <div>
      {
        values.map((item) => {
          return (
            <Welcome name={item.name} age={item.age} />
          )
        })
      }
    </div>
  )

}

export default App


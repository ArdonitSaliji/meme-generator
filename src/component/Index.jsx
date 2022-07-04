import React from 'react'
import { useState } from 'react'
const Index = () => {
  const [thingsArray, setThingsArray] = useState(['Thing 1', 'Thing 2'])
  function addThing() {
    setThingsArray((prevThings) => {
      return [...prevThings, `Thing ${prevThings.length + 1}`]
    })
  }
  const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>)

  return (
    <div>
      <button onClick={addThing}>add</button>
      {thingsElements}
    </div>
  )
}

export default Index

import { useState } from 'react'
import CardDeck from './CardDeck'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CardDeck />
    </>
  )
}

export default App

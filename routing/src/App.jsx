import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='text-orange-800 text-center text-3xl font-semibold'>Hello</h1>
    </div>
  )
}

export default App

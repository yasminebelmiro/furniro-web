import { useState } from 'react'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        <Home></Home>
    </>
  )
}

export default App

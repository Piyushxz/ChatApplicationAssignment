import { useState } from 'react'

import './App.css'
import TemporaryDrawer from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TemporaryDrawer/>
    </>
  )
}

export default App

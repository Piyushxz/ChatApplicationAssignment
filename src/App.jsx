import { useState } from 'react'

import './App.css'
import TemporaryDrawer from './components/Sidebar'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'
import Chat from './pages/Chat'
function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/chat" element={<Chat/>}/>
      </Routes>

    </>
  )
}

export default App

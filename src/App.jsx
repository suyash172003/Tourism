import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
function App() {
  return (
    <div className='h-screen w-screen bg-black'>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  )
}

export default App
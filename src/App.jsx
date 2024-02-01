import React, { useState } from 'react'
import Header from './components/Header'
import Center from './components/Center'


function App() {

 const [boardModalOpen, setBoardModalOpen] = useState(false)

  return (
    
   <div>
    <Header setBoardModalOpen={setBoardModalOpen} boardModalOpen={boardModalOpen}/>
    <Center />
   </div>
  )
}

export default App

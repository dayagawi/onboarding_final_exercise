// import { useState } from 'react'
// import './App.css'
import Avatar from './components/Avatar'

function App() {

  return (
    <>
    <div style={{ display: 'flex', gap: '50px', alignItems: 'center' }}>
      <Avatar 
        type="icon"
        size="sm"
      />
      <Avatar 
        type="icon"
        size="md"
      />
      <Avatar 
        type="icon"
        size="lg"
      />
      <Avatar 
        type="icon"
        size="xl"
      />

      <Avatar 
        type="initials"
        initials="AJ"
        size="sm"
      />
      <Avatar 
        type="initials"
        initials="AJ"
        size="md"
      />
      <Avatar 
        type="initials"
        initials="AJ"
        size="lg"
      />
      <Avatar 
        type="initials"
        initials="AJ"
        size="xl"
      />
    </div>
    </>
  )
}

export default App

// import { useState } from 'react'
// import './App.css'
import { CreatorCard } from './components/CreatorCard'

function App() {
  const handleDetailsClick = () => {
    console.log('Details button clicked!');
  };

  return (
    <>
      <h1>User Profile Cards</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <CreatorCard
          name="Emily Johnson"
          age={34}
          location="Chicago IL"
          email="email@x.dummyjson.com"
          onDetailsClick={handleDetailsClick}
        />
        <CreatorCard
          name="Emily Johnson"
          age={34}
          location="Chicago IL"
          email="email@x.dummyjson.com"
          onDetailsClick={handleDetailsClick}
        />
      </div>
    </>
  )
}

export default App

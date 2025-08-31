// import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {

  return (
    <>
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button variant="neutral" size="lg" onClick={() => {console.log('Button clicked')}}>
        Details
      </Button>
      <Button variant="neutral" size="md" onClick={() => {console.log('Button clicked')}}>
        Edit
      </Button>
      <Button variant="neutral" size="sm" onClick={() => {console.log('Button clicked')}}>
        Click me
      </Button>

      <Button variant="filter" size="lg" onClick={() => {console.log('Button clicked')}}>
        Cities
      </Button>
      <Button variant="filter" size="md" onClick={() => {console.log('Button clicked')}}>
        Age
      </Button>
      <Button variant="filter" size="sm" onClick={() => {console.log('Button clicked')}}>
        Gender
      </Button>

      <Button variant="only-text" size="lg" onClick={() => {console.log('Button clicked')}}>
        Cities
      </Button>
      <Button variant="only-text" size="md" onClick={() => {console.log('Button clicked')}}>
        Age
      </Button>
      <Button variant="only-text" size="sm" onClick={() => {console.log('Button clicked')}}>
        Gender
      </Button>
    </div>
    </>
  )
}

export default App

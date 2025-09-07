import { useState } from 'react';
import styles from './App.module.css'
import { Avatar } from './components/Avatar'
import { Toggle, type ToggleViewType } from './components/Toggle'
import ListIcon from './components/Icons/list-icon.svg?react'
import GridIcon from './components/Icons/grid-icon.svg?react'

function App() {
  const [toggleValue, setToggleValue] = useState<ToggleViewType>('list');

  return (
    <div className={styles['app-container']}>
      <Toggle
        leftOption={{
          value: 'grid',
          icon: <GridIcon />
        }}
        rightOption={{
          value: 'list',
          icon: <ListIcon />
        }}
        selectedValue={toggleValue}
        onChange={setToggleValue}
      />
      
      <div className={styles['avatars-container']}>
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
          initials="BAjhdhY"
          size="xl"
        />
      </div>
    </div>
  )
}

export default App

import { useState } from 'react';
import { Avatar } from './components/Avatar'
import { SearchBar } from './components/SearchBar'
import styles from './App.module.css'

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles['app-container']}>
      <SearchBar 
        placeholder="Search users..." 
        value={searchTerm}
        onChange={setSearchTerm}
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

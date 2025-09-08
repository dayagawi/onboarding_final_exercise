import { useState } from 'react';
import { Avatar } from './components/Avatar'
import { SearchBar } from './components/SearchBar'
import styles from './App.module.css'
import { CreatorCard } from './components/CreatorCard'

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleDetailsClick = () => {
    console.log('Details button clicked!');
  };

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
      
        <div className={styles['cards-container']}>
        <CreatorCard
          name="Emiliana Castillo Johnson Smith Kumar"
          age={34}
          location="Chicago IL"
          email="emiliana.castillo@email.com"
          onDetailsClick={handleDetailsClick}
        />
        <CreatorCard
          name="Marryanna Johanson"
          age={34}
          location="Miami, FL"
          email="email@x.dummyjson.com"
          onDetailsClick={handleDetailsClick}
        />
        <CreatorCard
          name="Yoisel Gonzalez"
          age={67}
          location="New York"
          email="emailemailemailemail@x.dummyjson.com"
          onDetailsClick={handleDetailsClick}
        />
        <CreatorCard
          name="Benjamin Smith"
          age={100}
          location="very long location name that should be truncated at the end"
          email="emailemailemailemail@x.dummyjson.com"
          onDetailsClick={handleDetailsClick}
        />
      </div>
    </div>
    
export default App

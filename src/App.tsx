import { CreatorCard } from './components/CreatorCard'
import styles from './App.module.css'

function App() {
  const handleDetailsClick = () => {
    console.log('Details button clicked!');
  };

  return (
    <>
      <h1>User Profile Cards</h1>
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
    </>
  )
}

export default App

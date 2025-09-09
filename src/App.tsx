import styles from './App.module.css'
import { Avatar } from './components/Avatar'
import { SearchPage } from './components/SearchPage'
import LightricksLogo from './components/Icons/lightricks_logo.svg?react';


function App() {
  return (
    <div className={styles['app-container']}>
      <div className={styles['home-page']}>
        <header className={styles['header']}>
          <div className={styles['logo-container']}>
            <LightricksLogo className={styles['logo']} />
          </div>
          <Avatar
            type="initials"
            initials="TJ"
            size="md"
          />
        </header>
        <main className={styles['main-content']}>
          <SearchPage />
        </main>
      </div>
    </div>
  )
}
export default App

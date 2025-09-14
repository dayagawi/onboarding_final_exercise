import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalHeader } from './components/GlobalHeader';
import { SearchPage } from './pages/SearchPage';
import { CreatorPage } from './pages/CreatorPage';
import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={styles['app-container']}>
        <GlobalHeader />
        <main className={styles['main-content']}>
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/creator/:id" element={<CreatorPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { Outlet } from 'react-router-dom'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import styles from './App.module.css';

function App() {

  return (
    <>
      <div className={styles.container}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
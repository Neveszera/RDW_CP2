import { Outlet } from 'react-router-dom'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <>
      <div className='container'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
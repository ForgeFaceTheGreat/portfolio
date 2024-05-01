import './styles/App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Error404 from './pages/404_error';
import { Route, Routes, Navigate } from 'react-router-dom'

function App()
{
  return (
    <>
      <Navbar />

      {/* Page Content */}
      <div className='container'>
          <Routes>
            <Route path='/' element={<Navigate replace to={'/portfolio/home'} />} />
            <Route path='/portfolio' element={<Navigate replace to={'/portfolio/home'} />} />
            <Route path='/portfolio/Home' element={<Home />} />
            <Route path='/portfolio/About' element={<About />} />
            <Route path='/portfolio/Projects' element={<Projects />} />

            <Route path='/portfolio/404_error' element={<Error404 />} />
            <Route path='*' element={<Navigate replace to={'/portfolio/404_error'} />} />
          </Routes>
      </div>
    </>
  )
}

export default App;

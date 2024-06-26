import './styles/App.css';

import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Error404 from './pages/404_error';

import { Route, Routes, Navigate } from 'react-router-dom'

function App()
{
  return (
    <>
      <div className='absoluteBackground'>
        <Navbar />

        {/* Page Content */}
        <div className='container'>
            <Routes>
              <Route path='/' element={<Navigate replace to={'/home'} />} />
              <Route path='/portfolio' element={<Navigate replace to={'/portfolio/home'} />} />
              <Route path='/Home' element={<Home />} />
              <Route path='/About' element={<About />} />
              <Route path='/Projects' element={<Projects />} />

              <Route path='/404_error' element={<Error404 />} />
              <Route path='*' element={<Navigate replace to={'/404_error'} />} />
            </Routes>
        </div>
      </div>
    </>
  )
}

export default App;

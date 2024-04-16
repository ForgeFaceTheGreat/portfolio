import './App.css';
import Navbar from './Navbar';
import "./Navbar.css"
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import { Route, Routes } from 'react-router-dom'

function App()
{
  return (
    <>
      <Navbar />
      <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Projects' element={<Projects />} />
          </Routes>
      </div>
    </>
  )
}

export default App;

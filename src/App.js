import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import { Route, Routes } from 'react-router-dom'

function App()
{
  return (
    <>
      <Navbar />

      {/* Page Content */}
      <div className='container'>
          <Routes>
            <Route path='/https://github.com/ForgeFaceTheGreat/portfolio' />
            <Route path='/home' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Projects' element={<Projects />} />
          </Routes>
      </div>
    </>
  )
}

export default App;

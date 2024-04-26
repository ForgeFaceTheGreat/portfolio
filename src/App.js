import './styles/App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Error404 from './pages/404_error';
import { Route, Routes } from 'react-router-dom'

function App()
{
  return (
    <>
      <Navbar />

      {/* Page Content */}
      <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
      </div>
    </>
  )
}

export default App;

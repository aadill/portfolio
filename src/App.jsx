
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/MainHome';
import About from './components/MainAbout';
import Contact from './components/MainHome';

function App() {
  return (
    <Router>
      <div className='a-nav'>
        <Navbar/>
        <div >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

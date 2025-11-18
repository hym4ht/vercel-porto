import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import SmoothScrollWrapper from './components/SmoothScroll';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Aurora from './components/Aurora'; 
import './App.css';

function App() {
  return (
    <Router>

      <div className="fixed inset-0 z-0">
        <Aurora />
      </div>
      <SmoothScrollWrapper> 
        <div className="relative z-10">
          <Navbar />
          <main className="container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </SmoothScrollWrapper>
    </Router>
  );
}

export default App;
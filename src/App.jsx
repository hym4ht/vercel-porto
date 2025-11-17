import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Aurora from './components/Aurora'; // <-- Impor Aurora
import './App.css';

function App() {
  return (
    <Router>
      {/* Aurora sebagai background global */}
      <div className="fixed inset-0 z-0">
        <Aurora />
      </div>

      {/* Konten utama dengan z-index lebih tinggi */}
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
    </Router>
  );
}

export default App;
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
    <div>
      <div className="fixed inset-0 z-0">
        <Aurora />
      </div>

      <SmoothScrollWrapper>
        <div className="relative z-10">
          <Navbar />

          <main className="container mx-auto p-4">
   
            <section id="home" className="scroll-mt-20">
              <Home />
            </section>

            <section id="about" className="scroll-mt-20">
              <About />
            </section>

            <section id="projects" className="scroll-mt-20">
              <Projects />
            </section>

            <section id="contact" className="scroll-mt-20">
              <Contact />
            </section>

          </main>
        </div>
      </SmoothScrollWrapper>
    </div>
  );
}

export default App;

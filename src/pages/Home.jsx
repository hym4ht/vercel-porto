import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SplitText from '../assets/components/SplitText';

function Home() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-128px)] text-white">
      <div className="text-center p-8">
        <SplitText 
          tag="h1"
          text="Welcome to DevFolio"
          splitType="chars"
          delay={50}
          className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 mb-4"
        />
        
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 animate-fade-in-up">
          A creative space where ideas turn into reality. Explore my projects and get to know more about my passion for development and design.
        </p>
        <div className="flex justify-center gap-4 animate-fade-in">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-slate-200 transition-transform transform hover:scale-105 shadow-lg"
          >
            View My Work
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link 
            to="/contact" 
            className="bg-white/10 text-white font-semibold py-3 px-6 rounded-full hover:bg-white/20 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}

// Helper CSS untuk animasi sederhana jika belum ada
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fade-in-up { animation: fade-in-up 0.8s ease-out 0.8s forwards; opacity: 0; }
  .animate-fade-in { animation: fade-in 1s ease-out 1.2s forwards; opacity: 0; }
`;
// Hapus style lama jika ada, lalu tambahkan yang baru
const oldStyle = document.querySelector('style[data-gemini-style]');
if (oldStyle) oldStyle.remove();
style.setAttribute('data-gemini-style', 'true');
document.head.appendChild(style);


export default Home;
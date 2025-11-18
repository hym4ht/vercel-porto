import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SplitText from '../assets/components/SplitText';
import About from './About';

function Home() {
  return (
    <div className="text-white"> 
      
  
      <section id="intro" className="flex items-center justify-center min-h-[calc(100vh-100px)] p-8">
        <div className="text-center">
          <SplitText 
            tag="h1"
            text="PORTFOLIO"
            splitType="chars"
            delay={50}
            className="text-7xl md:text-9xl lg:text-[12rem] xl:text-[16rem] font-landasans font-hype-heavy text-white mb-4"
          />
          
          <p className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 animate-fade-in-up">
            A creative space where ideas turn into reality. Explore my projects and get to know more about my passion for development and design.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in">
          </div>
        </div>
      </section>
      <About />
    </div>

  );
  
}


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

const oldStyle = document.querySelector('style[data-gemini-style]');
if (oldStyle) oldStyle.remove();
style.setAttribute('data-gemini-style', 'true');
document.head.appendChild(style);


export default Home;
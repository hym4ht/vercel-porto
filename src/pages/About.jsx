import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const skills = ["React", "JavaScript (ES6+)", "Node.js", "Tailwind CSS", "Figma", "Vite"];
  const containerRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.to(row1Ref.current, { x: -150, ease: "none" }, 0);
    tl.to(row2Ref.current, { x: 150, ease: "none" }, 0);
    tl.to(row3Ref.current, { x: -150, ease: "none" }, 0);
  }, { scope: containerRef });

  const images = Array.from({ length: 6 }).map((_, i) => `https://picsum.photos/300/200?random=${i}`);
  const images2 = Array.from({ length: 6 }).map((_, i) => `https://picsum.photos/300/200?random=${i + 10}`);
  const images3 = Array.from({ length: 6 }).map((_, i) => `https://picsum.photos/300/200?random=${i + 20}`);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-slate-900">
      {/* Parallax Background */}
      <div className="absolute inset-0 flex flex-col justify-center gap-8 opacity-20 pointer-events-none select-none">
        <div ref={row1Ref} className="flex gap-4 w-[150%] -ml-[25%]">
          {[...images, ...images].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-64 h-40 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div ref={row2Ref} className="flex gap-4 w-[150%] -ml-[25%]">
           {[...images2, ...images2].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-64 h-40 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div ref={row3Ref} className="flex gap-4 w-[150%] -ml-[25%]">
           {[...images3, ...images3].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-64 h-40 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[calc(100vh-128px)] text-white p-4 md:p-8 mt-40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            About Me
          </h2>
          <div className="p-8 shadow-lg backdrop-blur-sm bg-slate-900/50 rounded-xl border border-slate-800">
            <p className="text-slate-300 leading-relaxed mb-4">
              Hello! I'm a passionate front-end developer with a keen eye for design and a love for creating intuitive, dynamic user experiences. My journey in web development started with a simple "Hello World" and has since grown into a full-fledged passion for building beautiful and functional web applications.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              When I'm not coding, you can find me exploring the latest design trends, contributing to open-source projects, or enjoying a good cup of coffee. I believe in the power of collaboration and am always eager to learn new things and take on challenging projects.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-white">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                <span key={skill} className="bg-cyan-400/10 text-cyan-300 text-sm font-medium px-3 py-1 rounded-full border border-cyan-400/30">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
import ParallaxGallery from '../components/ParallaxGallery';

function About() {
  const skills = ["React", "JavaScript (ES6+)", "Node.js", "Tailwind CSS", "Figma", "Vite"];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParallaxGallery />

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
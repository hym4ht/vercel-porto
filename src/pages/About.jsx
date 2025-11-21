import ParallaxGallery from '../components/ParallaxGallery';
import StickerPeel from '../components/StickerPeel';

function About() {
  const skills = ["React", "JavaScript (ES6+)", "Tailwind CSS", "Figma", "Vite", "PHP", "HTML", "CSS"];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParallaxGallery />

      {/* Content */}
      {/* Ganti min-h-[calc(100vh-128px)] menjadi min-h-screen dan tambahkan padding bawah yang sangat besar (pb-[200px]) */}
      <div className="relative z-10 min-h-screen text-white p-4 md:p-8 mt-40 pb-[200px]">
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
            <div id="skills-container" className="flex flex-wrap gap-3 relative">

              {skills.map((skill, index) => {
                const logoMap = {
                  "React": "/react.svg",
                  "JavaScript (ES6+)": "/javascript.png",
                  "Tailwind CSS": "/tailwindcss.png",
                  "Figma": "/figma.png",
                  "Vite": "/vite.svg",
                  "PHP": "/phpicon.png",
                  "HTML": "/htmlicon.png",
                  "CSS": "/cssicon.png"
                };

                return (
                  <div key={skill} className="relative w-24 h-24 -mt-4 -ml-2 z-10">
                    <StickerPeel
                      imageSrc={logoMap[skill]}
                      width={80}
                      rotate={0}
                      peelDirection={30 + (index * 10)} // Variasi arah peel
                      initialPosition={{ x: 0, y: 0 }}
                      bounds="#skills-container"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
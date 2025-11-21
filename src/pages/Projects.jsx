const projects = [
  {
    title: "Portfolio Website Design",
    description: "A modern, responsive front-end built with React and Tailwind CSS, featuring a full interractive.",
    tags: ["React", "Tailwind CSS", "Vite"],
    image: "./portfolio-project.png"
  },
  {
    title: "Task Management App",
    description: "A sleek and intuitive task management application with drag-and-drop functionality to organize workflows.",
    tags: ["React", "GSAP", "Node.js"],
    image: "https://images.unsplash.com/photo-1547480053-7d174f67b557?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio site to showcase skills and projects, with a focus on smooth animations and a clean layout.",
    tags: ["React", "Framer Motion", "Three.js"],
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
  },
   {
    title: "Data Visualization Dashboard",
    description: "An analytics dashboard that provides insightful data visualization using interactive charts and graphs.",
    tags: ["React", "D3.js", "Express"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
  }
];

function Projects() {
  return (
    <div className="min-h-[calc(100vh-128px)] text-white p-4 md:px-10">
      
      <div className="max-w-6xl mx-auto pt-40"> 
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-purple-400/10 text-purple-300 text-xs font-medium px-2.5 py-1 rounded-full border border-purple-400/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
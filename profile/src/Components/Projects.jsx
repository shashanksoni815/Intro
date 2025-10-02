import ProjectCard from "./ProjectCard";


export default function ProjectsSection() {
  const projectsData = [
    {
      id: 1,
      title: "Weather Web Application",
      description: "Built a responsive weather app using React.js that fetches and displays real-time weather data from a public API. Implemented city-based search functionality with clean, user-friendly interface and error handling for better user experience.",
      techStack: ["React.js", "REST API", "CSS", "JavaScript"],
      githubLink: "#",
      liveLink: "#",
      icon: "☁️"
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description: "Created a sample e-commerce website with product listing and shopping cart functionality. Developed login/signup routes using React Router for simulated authentication and used LocalStorage to store cart and session data persistently across browser sessions.",
      techStack: ["React.js", "React Router", "LocalStorage", "CSS"],
      githubLink: "#",
      liveLink: "#",
      icon: "🛒"
    },
    {
      id: 3,
      title: "E-Commerce MERN Application",
      description: "Built a full-stack e-commerce platform featuring product listing, shopping cart, and user authentication. Integrated MongoDB with Node.js/Express.js backend and implemented secure JWT authentication. Customized UI for improved usability with responsive design.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      githubLink: "#",
      liveLink: "#",
      icon: "🏪"
    },
    {
      id: 4,
      title: "Weather Web Application",
      description: "Built a responsive weather app using React.js that fetches and displays real-time weather data from a public API. Implemented city-based search functionality with clean, user-friendly interface and error handling for better user experience.",
      techStack: ["React.js", "REST API", "CSS", "JavaScript"],
      githubLink: "#",
      liveLink: "#",
      icon: "☁️"
    },
    {
      id: 5,
      title: "E-Commerce Website",
      description: "Created a sample e-commerce website with product listing and shopping cart functionality. Developed login/signup routes using React Router for simulated authentication and used LocalStorage to store cart and session data persistently across browser sessions.",
      techStack: ["React.js", "React Router", "LocalStorage", "CSS"],
      githubLink: "#",
      liveLink: "#",
      icon: "🛒"
    },
    {
      id: 6,
      title: "E-Commerce MERN Application",
      description: "Built a full-stack e-commerce platform featuring product listing, shopping cart, and user authentication. Integrated MongoDB with Node.js/Express.js backend and implemented secure JWT authentication. Customized UI for improved usability with responsive design.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      githubLink: "#",
      liveLink: "#",
      icon: "🏪"
    }
  ];

  return (
    <div id="projects" className=" w-full  text-white px-6 py-20 relative ">
     
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in React and full-stack development
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              icon={project.icon}
            />
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
        
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        
        .delay-700 {
          animation-delay: 700ms;
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
import { useState } from 'react';

// ProjectCard Component (Reusable Child)
function ProjectCard({ title, description, techStack, githubLink, liveLink, icon }) {
  return (
    <div className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 border border-slate-700/50">
      {/* Gradient Header with Icon */}
      <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
        <div className="text-8xl opacity-80 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
          {icon}
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => {
            const colors = [
              'bg-blue-500/20 text-blue-400',
              'bg-purple-500/20 text-purple-400',
              'bg-pink-500/20 text-pink-400',
              'bg-green-500/20 text-green-400',
              'bg-yellow-500/20 text-yellow-400',
              'bg-cyan-500/20 text-cyan-400'
            ];
            return (
              <span 
                key={index} 
                className={`px-3 py-1 ${colors[index % colors.length]} text-xs rounded-full font-medium`}
              >
                {tech}
              </span>
            );
          })}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <a 
            href={githubLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-transparent border-2 border-blue-400 hover:bg-blue-400/10 text-blue-400 px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center text-sm"
          >
            View Code
          </a>
          <a 
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center text-sm shadow-lg hover:shadow-blue-500/50"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
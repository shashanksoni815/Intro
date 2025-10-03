import { useState, useEffect, useRef } from 'react';

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: "HTML", level: 90, category: "frontend" },
    { name: "CSS", level: 85, category: "frontend" },
    { name: "JavaScript", level: 80, category: "frontend" },
    { name: "React.js", level: 75, category: "frontend" },
    { name: "Node.js", level: 70, category: "backend" },
    { name: "Express.js", level: 70, category: "backend" },
    { name: "MongoDB", level: 65, category: "backend" },
    { name: "Java", level: 60, category: "programming" },
    { name: "Data Structures & Algorithms", level: 65, category: "programming" }
  ];

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getBarColor = (category) => {
    switch (category) {
      case "frontend":
        return "from-blue-500 to-cyan-500";
      case "backend":
        return "from-purple-500 to-pink-500";
      case "programming":
        return "from-green-500 to-emerald-500";
      default:
        return "from-blue-500 to-purple-500";
    }
  };

  return (
    <div ref={sectionRef} className="w-full text-white px-6 py-20 relative">
      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* Skills Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
            //   style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Skill Name and Percentage */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-base font-semibold text-white group-hover:text-blue-300 transition-colors">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium text-gray-400">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="relative w-full h-2.5 bg-slate-700/50 rounded-full overflow-hidden">
                {/* Animated Progress Bar */}
                <div
                  className={`h-full bg-gradient-to-r ${getBarColor(skill.category)} rounded-full transition-all duration-1000 ease-out relative`}
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%'
                  }}
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Skill Categories Legend */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            <span className="text-gray-400">Frontend</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <span className="text-gray-400">Backend</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-r from-green-500 to-emerald-500"></div>
            <span className="text-gray-400">Programming</span>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
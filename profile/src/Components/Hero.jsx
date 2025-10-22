import { useState, useEffect } from 'react';

export default function HeroSection() {
  // const [text, setText] = useState('');
  // const fullText = 'Frontend Developer';
  
  // useEffect(() => {
  //   let index = 0;
  //   const interval = setInterval(() => {
  //     setText(fullText.slice(0, index));
  //     index++;
  //     if (index > fullText.length) {
  //       clearInterval(interval);
  //     }
  //   }, 100);
    
  //   return () => clearInterval(interval);
  // }, []);

  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "Full Stack Engineer"
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100; // faster when deleting

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        // Typing forward
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting backwards
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        // Move to next role
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-8  text-white px-6 relative overflow-hidden">
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <h3 className='text-xl md:text-2xl font-light text-blue-300 animate-fade-in'>
          Hello! I'm
        </h3>
        
        <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in-up'>
          Shashank Soni
        </h1>
        
        <p className='text-3xl md:text-4xl lg:text-5xl font-semibold text-blue-300 min-h-[3rem] animate-fade-in-up'>
          {text}
          <span className="animate-blink">|</span>
        </p>
        
        <div className='max-w-2xl mx-auto mt-6 animate-fade-in-up'>
          <p className='text-base md:text-lg text-gray-300 leading-relaxed'>
            MERN Stack Developer specializing in full-stack web development with practical 
experience building end-to-end applications. Strong expertise in React.js 
frontend development and Node.js/Express.js backend systems, integrated with 
MongoDB databases for scalable solutions.
          </p>
        </div>
        
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 animate-fade-in-up'>
          <button onClick={() => scrollToSection('projects')} className='group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50'>
            <span  className="relative z-10">View My Work</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
          </button>
          
          <button onClick={() => scrollToSection('getInTouch')} className='group relative bg-transparent border-2 border-blue-400 hover:bg-blue-400/10 text-blue-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-blue-400/50'>
            <span className="relative z-10">Get In Touch</span>
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div className="mt-12 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </div>
  );
}


// import React, { useEffect, useState } from 'react'
// import "./custom.css";

// const Hero = () => {

//   const roles = ["Frontend Developer", "Backend Developer", "Full Stack Developer"];

//   const [text, setText] = useState("");
//   const [roleIndex, setRoleIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currRole = roles[roleIndex]
//     let typingSpeed = isDeleting ? 80 : 150;

//     const interval = setTimeout(() => {
//       setText((prev) => isDeleting ? currRole.substring(0, prev.length-1) : currRole.substring(0, prev.length+1)
//     );

//     if(!isDeleting && text === currRole) {
//       setTimeout(() => setIsDeleting(true) , 1000);
//     } 
//     else if(isDeleting && text === "") {
//       setIsDeleting(false);
//       setRoleIndex((prev) => (prev + 1) % roles.length )
//     }

//     }, typingSpeed);

//     return () => clearTimeout(interval);

//   }, [isDeleting, text, roleIndex])

//   return (
//     <div className="h-full w-full flex flex-col justify-center items-center gap-4 absolute bg-blue-200">
//       <h3 className='text-2xl'>Hello! I'm </h3>
//       <p className='text-7xl'>Shashank Soni</p>
//       <p className='text-4xl'>{text}</p>
//       <div className='w-2xl '>
//         <p>Aspiring React Developer with hands-on experience in full-stack web development 
// through multiple real-world projects. Strong foundation in modern development 
// practices with a passion for building clean, efficient applications. Seeking to 
// contribute to innovative teams while growing expertise in scalable web solutions.</p>
//       </div>
//       <div className='gap-4 '>
//         <button className='glow-border bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105'> View My Work</button>
//         <button className='glow-border bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105'> Get In Touch</button>
//       </div>
//     </div>
//   )
// }

// export default Hero
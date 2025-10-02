import React from 'react'
import Hero from './Hero'
import ProjectsSection from './Projects'
import GetInTouch from './GetInTouch'

const HomePage = () => {
  return (
    <>
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        
        {/* Global animated background orbs */}
        <div className="fixed inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        
        <Hero />
        <ProjectsSection />
        <GetInTouch/>
        </div>
    </>

  )
}

export default HomePage
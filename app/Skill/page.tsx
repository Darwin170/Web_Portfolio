import React from 'react'
import Navbar from '../components/Navbar'

const SKILL = () => {
  return (
    <div>
      <Navbar />
      <div className="font-mono p-6 md:p-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between gap-12">
          
          <div className="w-full max-w-md lg:max-w-xl">
            <img 
              className="w-full h-auto object-cover transition-all duration-300 hover:scale-105 rounded-3xl shadow-xl" 
              src="code.gif" 
              alt="coding animation"
            />
          </div>

          <div className="w-full flex-1">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start mb-8 gap-6 border-b-2 pb-4">
              <h1 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-tighter">
                Software Skills
              </h1>
              <h1 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-tighter sm:mr-10">
                Extra Skills
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">
              <ul className="list-disc space-y-3 pl-5 text-xl md:text-2xl font-bold flex-1">
                <li className="hover:text-red-500 transition-colors">React</li>
                <li className="hover:text-red-500 transition-colors">JavaScript</li>
                <li className="hover:text-red-500 transition-colors">MongoDB</li>
                <li className="hover:text-red-500 transition-colors">Java</li>
                <li className="hover:text-red-500 transition-colors">HTML</li>
                <li className="hover:text-red-500 transition-colors">CSS</li>
              </ul>

              <ul className="list-disc space-y-3 pl-5 text-xl md:text-2xl font-bold border-l-0 sm:border-l-2 sm:pl-10 border-black flex-1">
                <li className="hover:text-red-500 transition-colors">Problem Solving</li>
                <li className="hover:text-red-500 transition-colors">Critical Thinking</li>
                <li className="hover:text-red-500 transition-colors">Time Management</li>
                <li className="hover:text-red-500 transition-colors">Teamwork</li>
                <li className="hover:text-red-500 transition-colors">Discipline</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SKILL

import React from 'react'
import Navbar from '../components/Navbar'
import ImageDissolve from './pictureDisolve'

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="font-mono p-6 md:p-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between gap-10">
          
          <div className="w-full max-w-sm md:max-w-md lg:max-w-xl flex justify-center lg:justify-end">
            <ImageDissolve />
          </div>

          <div className="w-full flex-1">
            <div className="border-b-2 pb-4 mb-8 text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-black uppercase tracking-tighter">
                Projects
              </h1>
            </div>

            <ul className="list-disc space-y-4 pl-8 text-xl md:text-2xl font-bold max-w-md mx-auto lg:mx-0">
              <li className="hover:text-red-500 transition-colors cursor-pointer">
                <a 
                  href="https://github.com/Darwin170/Vaccibite" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Vaccibite
                </a>
              </li>
              
              <li className="hover:text-red-500 transition-colors cursor-pointer">
                <a 
                  href="https://github.com/Darwin170/Web_Portfolio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Web Portfolio
                </a>
              </li>
              
              <li className="hover:text-red-500 transition-colors cursor-pointer">
                <a 
                  href="https://github.com/Darwin170/CCOBJPGL_PROJECT_INF221" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Lutong Mang Kanor
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects

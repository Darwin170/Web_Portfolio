import React from 'react'
import Navbar from '../components/Navbar'

const ACHIEVEMENTS = () => {
  return (
    <div>
      <Navbar />
      <div className="font-mono p-6 md:p-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between gap-12">
          
     
          <div className="w-full max-w-md lg:max-w-xl">
            <img 
              className="w-full h-auto object-cover transition-all duration-300 hover:scale-105 rounded-3xl shadow-xl" 
              src="Achivements.gif" 
              alt="Achievements" 
            />
          </div>


          <div className="w-full flex-1">
            <div className="border-b-2 pb-4 mb-6 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-black uppercase">
                Academic Achievements
              </h1>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-center lg:text-left">
              Dean's Lister
            </h2>

            
            <div className="flex flex-col sm:flex-row gap-10 lg:gap-16">
              
          
              <ul className="list-disc space-y-6 pl-5 flex-1">
                <div className="border-b-2 pb-4">
                  <li className="font-bold text-xl">1st Honor Dean's Lister 1st Term</li>
                  <p className="text-gray-700">National University - BSIT-MWA</p>
                  <p className="text-gray-500 text-sm">2022-2023</p>
                </div>

                <div className="border-b-2 pb-4">
                  <li className="font-bold text-xl">2nd Honor Dean's Lister 2nd Term</li>
                  <p className="text-gray-700">National University - BSIT-MWA</p>
                  <p className="text-gray-500 text-sm">2022-2023</p>
                </div>

                <div className="border-b-2 pb-4">
                  <li className="font-bold text-xl">2nd Honor Dean's Lister 1st Term</li>
                  <p className="text-gray-700">National University - BSIT-MWA</p>
                  <p className="text-gray-500 text-sm">2023-2024</p>
                </div>
              </ul>

     
              <ul className="list-disc space-y-6 pl-5 flex-1 border-l-0 sm:border-l-2 sm:pl-10 border-black">
                <div className="border-b-2 pb-4">
                  <li className="font-bold text-xl">1st Honor Dean's Lister 2nd Term</li>
                  <p className="text-gray-700">National University - BSIT-MWA</p>
                  <p className="text-gray-500 text-sm">2023-2024</p>
                </div>

                <div className="border-b-2 pb-4">
                  <li className="font-bold text-xl">1st Honor Dean's Lister 1st Term</li>
                  <p className="text-gray-700">National University - BSIT-MWA</p>
                  <p className="text-gray-500 text-sm">2024-2025</p>
                </div>
              </ul>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ACHIEVEMENTS

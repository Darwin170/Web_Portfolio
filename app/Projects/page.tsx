import React from 'react'
import Navbar from '../components/Navbar'
import ImageDissolve from './pictureDisolve'

const Projects = () => {
  return (
    <div>
        <Navbar/>
      <div className="h-auto w-auto font-mono p-6">
        <div className="float-right mr-25 pr-10">
        <ImageDissolve/>
        </div>
        <div className="flex font-bold text-3xl text-black ml-15 pt-10 pb-10">
            <h1> Projects </h1>
        </div>
      
        <ul className="flex list-disc ml-8  w-200">
         <div className="font-bold text-2xl list-disc ml-10 w-80">
          <li> Vaccibite</li>
          <li> Web Portfolio</li>
          <li> Lutong Mang Kanor</li>
          
         </div>

        </ul>
    </div>
  </div>
  )
}

export default Projects

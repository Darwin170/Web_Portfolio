import React from 'react'
import Navbar from '../components/Navbar'

const SKILL = () => {
  return (
    <div>
      <Navbar/>
      <div className="h-auto w-auto font-mono p-8 font-bold">
        <img className="h-120 w-120 mr-25 float-right  relative z-0  transition-all duration-300 hover:scale-110 rounded-4xl" src="code.gif" alt="profile"/>
        <div className="flex font-bold text-3xl text-black ml-15 pt-10 pb-10">
            <h1> Sofware Skills</h1>
            <div className="ml-55">
              <h1>Extra Skill</h1>
            </div>
        </div>
        <ul className="flex list-disc ml-8  w-200">
          <div className="font-bold border-b-2 text-2xl list-disc ml-10 w-80">
            <li>React</li>
            <li>Javascript</li>
            <li>MongoDB</li>
            <li>Java</li>
            <li>HTML</li>
            <li>CSS</li>
           
          </div>
          <div className="font-bold text-2xl border-l-2 pl-10 border-b-2">
                <li>Problem Solving</li>
                <li>Critical Thinking</li>
                <li>Time Management</li>
                <li>Teamwork</li>
                <li>Discipline</li>
              </div>
        </ul>

      </div>
    </div>
  )
}

export default SKILL
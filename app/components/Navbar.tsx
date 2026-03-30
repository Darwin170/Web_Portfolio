'use client';
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full font-mono">
  
      <ul className='flex items-center justify-end h-16 px-6 md:px-12 max-w-7xl mx-auto gap-4 md:gap-8 text-black font-bold'>
        
        <li className='px-3 py-1 rounded-md hover:bg-gray-500 transition-all duration-300 hover:scale-110'>
          <Link href="/">About</Link>
        </li> 
        
        <li className='px-3 py-1 rounded-md hover:bg-gray-500 transition-all duration-300 hover:scale-110'>
          <Link href="/Achivements">Achievements</Link>
        </li> 
        
        <li className='px-3 py-1 rounded-md hover:bg-gray-500 transition-all duration-300 hover:scale-110'>
          <Link href="/Projects">Projects</Link>
        </li> 
        
        <li className='px-3 py-1 rounded-md hover:bg-gray-500 transition-all duration-300 hover:scale-110'>
          <Link href="/Skill">Skill</Link>
        </li> 
        
      </ul>
    </nav>
  )
}

export default Navbar

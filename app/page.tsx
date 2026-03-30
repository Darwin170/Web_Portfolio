import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import { SocialIcon } from 'react-social-icons'

export default function Home() {
  return (
       <div className="min-h-screen bg-gray-400">
      <Navbar />
      <div className="font-mono p-4 md:p-8 lg:p-12">
        
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto gap-5">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="border-b-2 border-black inline-block lg:block">
              <h1 className="text-3xl md:text-5xl font-bold pb-2">
                Hi! I'm Darwin Umengan
              </h1>
            </div>
            
            <h2 className="text-xl md:text-3xl font-bold mt-4">
              Web Developer | Karate Practitioner
            </h2>
            
            <p className="text-gray-800 mt-6 max-w-xl mx-auto lg:mx-0 font-bold">
              I am a BSIT student at National University specializing in Mobile and Web Application Development,
              with a strong interest in building practical, user-focused systems.
            </p>

            <div className="flex flex-col items-center lg:items-start gap-8 mt-10">
              <Link href="Copy of Darwin Umengan.pdf" download="Copy of Darwin Umengan.pdf">
                <button className="h-12 px-8 bg-red-400 rounded-full hover:bg-red-300 text-black font-bold transition-all duration-300 hover:scale-110 shadow-lg">
                  Download CV
                </button>
              </Link>

              <div className="flex gap-5">
                <SocialIcon className="transition-all duration-300 hover:scale-110" url="https://www.facebook.com/darwin.umengan.7" />
                <SocialIcon className="transition-all duration-300 hover:scale-110" url="https://www.linkedin.com/in/darwin-umengan-1b0129396?utm_source=share_via&utm_content=profile&utm_medium=member_ios&fbclid=IwY2xjawQ3SCpleHRuA2FlbQIxMABicmlkETFsVDZGbFZwaFZaNUdFejJKc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHnc4U5Tv-0sgkuK51_K2VLfq2RVLUhKynMnoHDsr3q-GdAsC02OrLzPKjyVm_aem_FVe6gP4P_CS1nHGy2bwZgQ" />
                <SocialIcon className="transition-all duration-300 hover:scale-110" url="https://github.com/Darwin170" />
              </div>
            </div>
          </div>

          <div className="relative group w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[500px] transition-all duration-300 hover:scale-105 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="nologo.jpg"
              alt="profile"
              className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0" 
            />
            <img
              src="profile.jpg"
              alt="profile-hover"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
            />
          </div>

        </div>
      </div>
    </div>
  );
}

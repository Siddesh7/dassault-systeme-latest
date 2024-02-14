import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="px-2 md:px-6 py-4 md:pt-6 min-h-screen bg-cover bg-[url('/banner-bg.png')]">
      <Navbar />

      <div className="flex flex-col md:flex-row justify-evenly md:items-center mt-[30px]">
        <div className="w-[40vw] absolute opacity-40 top-40 left-[60%] md:top-0 md:left-0 md:opacity-100  md:relative animate-up-down">
          <Image src="/aa.png" alt="" width={500} height={500} />
        </div>
        <div className="flex flex-col md:p-8 w-[90vw] md:w-[50vw] mt-[10vh] md:min-h-[50vh] mx-[20px]">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-orange-500 to-pink-400 text-transparent bg-clip-text bg-300% animate-gradient">
            Get Ready to Experience the new way of learning!
          </h1>

          <p className="py-6 text-sm w-[90%] md:w-full md:text-lg text-grey font-medium">
            Using VR in education allows students to experience and engage with
            the material in a way that is not possible through traditional
            methods, which can make the learning process more interactive and
            memorable.Providing simulations for hands-on learning in subjects
            such as science, technology, engineering, and mathematics (STEM).
          </p>
          <button className="btn btn-primary w-[160px]">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

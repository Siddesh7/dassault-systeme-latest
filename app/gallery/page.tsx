import React from "react";
import Navbar from "../components/Navbar";
const items = [
  {
    image: "/7.png",
    description: `Review by Mr. Hemant Gadgil, CEO, Dassault Systemes La Fondation, Pune and Mr. Praveen Bhagoji, Project Manager, Dassault Systemes, Bangalore 
5th August 2022`,
  },
  {
    image: "/1.png",
    description:
      "Application of VR in school education. An extension activity at CBM Govt. Aided School, Kovaipudur - 3rd November, 2023",
  },
  {
    image: "/2.png",
    description: `Application of VR in school education 
An extension activity at Shree Vidyalaya Matriculation School, Erode
28th August, 2023`,
  },
  {
    image: "/3.png",
    description: `Application of VR in school education 
An extension activity at Shree Vidyalaya Matriculation School, Erode
28th August, 2023`,
  },
  {
    image: "/4.png",
    description: `Physics concept explanation using VR goggle
An extension activity at RKV. School, Kovaipudur, Coimbatore 
20th October, 2022`,
  },
  {
    image: "/5.png",
    description: `
Pythogorous theorem explanation using VR goggle
An extension activity at Govt. School, Arivoli Nagar, Kovaipudur
22nd September 2022`,
  },
  {
    image: "/6.png",
    description: `
Mechanical students experiencing the VR experiments`,
  },
];

const Team = () => {
  return (
    <div className="min-h-screen w-[95%] m-auto">
      <Navbar />
      <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-orange-500 to-pink-400 text-transparent bg-clip-text bg-300% animate-gradient my-12 text-center">
        Gallery
      </h1>
      <div className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-4 gap-6  my-8">
        {items.map((item, index) => (
          <div key={index} className="card bg-base-300 shadow-xl">
            <figure className="min-h-[250px] max-h-[250px]">
              <img
                src={`${process.env.NEXT_PUBLIC_HOST}/gallery/${item.image}`}
                alt="m=image"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

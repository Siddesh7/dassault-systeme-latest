import React from "react";
import Navbar from "../components/Navbar";
const TeamData = {
  mech: [
    {
      name: "Anton Joel J",
      image: "anton.jpeg",
    },
    {
      name: "Praveen K",
      image: "praveen.jpeg",
    },
    {
      name: "Giritharan",
      image: "giritharan.jpeg",
    },
    {
      name: "Kishore R",
      image: "kishore.jpeg",
    },
    {
      name: "Keerthik Vishal MS",
      image: "keerthik.jpeg",
    },
    {
      name: "Kudumula Bhanu Prakash",
      image: "kudumula.jpeg",
    },
  ],
  cse: [
    {
      name: "Nishanth Sri Raja",
      image: "nishanth.jpeg",
    },
    {
      name: "Sivaprakash C",
      image: "sivaprakash.jpeg",
    },
    {
      name: "Dhamodhara Kannan A",
      image: "dhamo.jpeg",
    },
    {
      name: "Siddesh",
      image: "siddesh.jpeg",
    },
    {
      name: "Senthilrajan N",
      image: "senthil.jpeg",
    },
    {
      name: "Sugheeshan S",
      image: "sugheeshan.jpeg",
    },
  ],
};

const faculty = [
  {
    name: "Dr.S.Sundararaj, M.Tech., Ph.D.",
    role: "Professor, Department of Mechanical Engineering",
    email: "s.sundararaj@skct.edu.in",
    image: "sundarraj.jpeg",
  },
  {
    name: "Ms. G. Nivedhitha",
    role: "Assistant Professor, Department of Computer Science and Engineering",
    email: "niveditha.g@skct.edu.in",
    image: "",
  },
  {
    name: "Ms. P.Kalpana",
    role: "Assistant Professor, Department of Computer Science and Engineering",
    email: "p.kalpana@skct.edu.in",
    image: "",
  },
];
const alumnus = [
  {
    name: "DHARSAN. K",
    role: "Alumnus, 2016-2020 Batch, Department of Mechanical Engineering",
    email: "Grass Root Advanced Systems, Coimbatore",
    image: "darshan.png",
  },
];
const design = [
  {
    name: "R. J. JOEL JESUDASS",
    role: "Design Engineer",
    email: "Virmodello Technologies, Salem",
    image: "joel.jpeg",
  },
];
const Team = () => {
  return (
    <div className="min-h-screen w-[95%] m-auto">
      <Navbar />
      <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-orange-500 to-pink-400 text-transparent bg-clip-text bg-300% animate-gradient my-6 text-center">
        Team
      </h1>
      <div>
        <p className="text-xl md:text-2xl font-bold mt-10">Faculty Team</p>
        <div className="flex flex-col md:grid md:grid-cols-4 gap-6  my-8">
          {faculty.map((item, index) => (
            <div key={index} className="card bg-base-200 shadow-xl">
              <img
                src={`${process.env.NEXT_PUBLIC_HOST}/team/${item.image}`}
                alt={item.name}
                className="rounded-full max-w-40 max-h-40 min-h-40 min-w-40 object-cover mx-auto mt-4"
              />

              <div className="card-body items-center text-center">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.role}</p>
                <p>{item.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xl md:text-2xl font-bold mt-10">Alumnus</p>
        <div className="flex flex-col md:grid md:grid-cols-4 gap-6  my-8">
          {alumnus.map((item, index) => (
            <div key={index} className="card bg-base-200 shadow-xl">
              <img
                src={`${process.env.NEXT_PUBLIC_HOST}/team/${item.image}`}
                alt={item.name}
                className="rounded-full max-w-40 max-h-40 min-h-40 min-w-40 object-cover mx-auto mt-4"
              />

              <div className="card-body items-center text-center">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.role}</p>
                <p>{item.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
      <p className="text-xl md:text-2xl font-bold mt-10">Student Team</p>
      <div>
        <p className="text-xl md:text-2xl font-bold mt-10">
          Department of Mechanical Engineering
        </p>
        <div className="flex flex-col md:grid md:grid-cols-4 gap-6  my-8">
          {TeamData.mech.map((team, index) => (
            <div key={index} className="card bg-base-200 shadow-xl">
              <img
                src={`${process.env.NEXT_PUBLIC_HOST}/team/${team.image}`}
                alt={team.name}
                className="rounded-full max-w-40 max-h-40 min-h-40 min-w-40 object-cover mx-auto mt-4"
              />

              <div className="card-body items-center text-center">
                <h2 className="card-title">{team.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xl md:text-2xl font-bold mt-10">
          Department of Computer Science and Engineering
        </p>
        <div className="flex flex-col md:grid md:grid-cols-4 gap-6  my-8">
          {TeamData.cse.map((team, index) => (
            <div key={index} className="card bg-base-200 shadow-xl">
              <img
                src={`${process.env.NEXT_PUBLIC_HOST}/team/${team.image}`}
                alt={team.name}
                className="rounded-full max-w-40 max-h-40 min-h-40 min-w-40 object-cover mx-auto mt-4"
              />

              <div className="card-body items-center text-center">
                <h2 className="card-title">{team.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

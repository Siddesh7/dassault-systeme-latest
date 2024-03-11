import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen w-[90%] m-auto">
      <Navbar />

      <div className="text-center flex flex-col gap-2 text-sm md:text-xl mt-10">
        <p className="text-lg md:text-3xl font-bold my-2">
          Experimentally - A virtual reality based experimental learning
          experience
        </p>
        <div className="flex flex-col lg:flex-row justify-center lg:divide-x-2 gap-2">
          <p className="px-2">Department of Mechanical Engineering</p>
          <p className="px-2">Department of Computer Science and Engineering</p>
        </div>
        <p>Supported by La Fondation Dassault Systemes</p>
      </div>
      <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-12 mb-6 text-center">
        About the Project
      </h1>
      <div>
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-orange-500 to-pink-400 text-transparent bg-clip-text bg-300% animate-gradient mt-12 mb-6">
          Objectives
        </h1>
        <ul className="text-md md:text-xl list-disc">
          <li className="my-2">
            To enable engineering graduates to seek quality education by making
            them understand the fundamentals in engineering.
          </li>
          <li className="my-2">
            To help students to change the way they perceive science and
            mathematics
          </li>
          <li className="my-2">
            Through it strengthen understanding of the fundamentals in science,
            mathematics and basic engineering, which is a challenge for many of
            students coming from rural areas and joining engineering programs.
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-orange-500 to-pink-400 text-transparent bg-clip-text bg-300% animate-gradient mt-12 mb-6">
          Scope
        </h1>
        <ul className="text-md md:text-xl list-disc">
          <li className="my-2">
            To impart education with a practical demonstration and make students
            experience science and mathematics around them.
          </li>
          <li className="my-2">
            Develop experimental learning kit, through Digital demonstrations,
            Videos and VR, which will enable students to visualise and
            experience the concepts.
          </li>
          <li className="my-2">
            To impart education with a practical demonstration using
            experimental kits and make the students experience science,
            mathematics and applications of engineering through VR.
          </li>
          <li className="my-2">
            Provide quality education through such innovative learning material
            that explains concepts with practical demonstration, to students who
            do not have access to expert teachers and/or well-equipped
            laboratory set-ups / infrastructure.
          </li>
          <li className="my-2">
            Through it strengthen the fundamentals in science, mathematics and
            basic engineering, which is a challenge for many of students coming
            from rural areas and joining engineering programs
          </li>
          <li className="my-2">
            Development of learning content and learning kit with digital and VR
            experience, with website for access to experiments remotely, 24/7
            with VR based player
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-orange-500 to-pink-400 text-transparent bg-clip-text bg-300% animate-gradient mt-12 mb-6">
          Significance
        </h1>
        <ul className="text-md md:text-xl list-disc">
          <li className="my-2">
            Development of learning content and learning kit with digital and VR
            experience, with website for access to experiments remotely, 24/7
            with VR based player
          </li>
          <li className="my-2">
            It provides scalable model to reach out to millions of students
            through online platform and help them to build their base /
            foundation
          </li>
          <li className="my-2">
            By changing the methodology of education, the students will be
            comfortable in science, mathematics and technology topics.
          </li>
          <li className="my-2">
            The project when implemented will aim to change the way student
            perceives engineering around them in the future, will develop strong
            foundation for them through experiential learning to bring out their
            full potential.
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-orange-500 to-pink-400 text-transparent bg-clip-text bg-300% animate-gradient mt-12 mb-6">
          Learning Outcomes for Students
        </h1>
        <ul className="text-md md:text-xl list-disc">
          <li className="my-2">
            The VR kits created are for students to experiment and study on them
            virtually
          </li>
          <li className="my-2">
            The students are then allowed to comprehend the concepts with
            through understanding of the fundamentals
          </li>
          <li className="my-2">
            Such a experiential learning content through visual understanding
            will greatly help them and make them ready for their career
            progression
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;

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

      <div>
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-orange-500 to-pink-400 text-transparent bg-clip-text bg-300% animate-gradient mt-12 mb-6">
          About
        </h1>
        <p className="text-md md:text-xl">
          Nestled at the foothills of the Western Ghats, located in a sprawling
          52-acre campus in Kovaipudur, Coimbatore, Sri Krishna College of
          Technology (SKCT) is a vibrant institute of higher education
          established in 1985 promoted by Sri Krishna Institutions. An
          extraordinary freedom of opportunity—to explore, to collaborate and to
          challenge oneself is the hallmark of the Institute. Being an
          autonomous institute, affiliated to Anna University, Chennai, and
          approved by AICTE, New Delhi, SKCT lays strong emphasis on
          collaborative research and stands apart from other institutes by its
          participatory work culture, student care programmes and high industry
          interaction. In a span of 38 years, it has emerged as one of the
          premier engineering colleges for learning, discovery and innovation
          due to the dynamic leadership of the Chairperson and Managing Trustee
          Smt S Malarvizhi. Being an acclaimed educationalist, she continues to
          contribute profusely for the glory and happiness of advancing
          generations. The college is accredited with A Grade by NAAC and
          eligible undergraduate programs are accredited by the National Board
          of Accreditation (NBA), New Delhi. The college offers 11 undergraduate
          programmes and 6 postgraduate programmes in engineering, technology,
          and Management Studies.
        </p>
      </div>
      <div>
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-orange-500 to-pink-400 text-transparent bg-clip-text bg-300% animate-gradient mt-12 mb-6">
          Vision
        </h1>
        <p className="text-md md:text-xl">
          Sri Krishna College of Technology aspires to be recognized as one of
          the pioneers in imparting world class technical education through
          technology enabled innovative teaching learning processes with a focus
          on research activities to cater, to the societal needs.
        </p>
      </div>
      <div>
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-orange-500 to-pink-400 text-transparent bg-clip-text bg-300% animate-gradient mt-12 mb-6">
          Mission
        </h1>

        <ul className="text-md md:text-xl list-disc">
          <li className="my-2">
            To be recognized as centre of excellence in science, engineering and
            technology through effective teaching and learning processes by
            providing a conducive learning environment.
          </li>
          <li className="my-2">
            To foster research and development with creative and entrepreneurial
            skills by means of innovative applications of technology.
          </li>
          <li className="my-2">
            Accomplish expectations of the society and industry by nurturing the
            students to be competent professionals with integrity.
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-orange-500 to-pink-400 text-transparent bg-clip-text bg-300% animate-gradient mt-12 mb-6">
          Department of Mechanical Engineering, SKCT
        </h1>
        <p className="text-md md:text-xl">
          Established in 1985, the Mechanical Engineering Department boasts
          state-of-the-art laboratories and computing facilities. The team of
          highly qualified faculty is committed to the prioritizing of student
          development in both academic pursuits and placement opportunities.
          Alumni from the department hold prominent positions in various
          industries, including Hyundai, TVS – Sundram Fasteners, Bosch, Turbo
          Energy, and Asahi Glass. Through a curriculum that emphasizes a
          perfect blend of theoretical knowledge and real-world experiences, our
          students are equipped with the skills necessary to meet the demands of
          society effectively.
        </p>
      </div>
      <div className="mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-orange-500 to-pink-400 text-transparent bg-clip-text bg-300% animate-gradient mt-12 mb-6">
          Department of Computer Science and Engineering, SKCT
        </h1>
        <p className="text-md md:text-xl">
          The Department of Computer Science and Engineering was established in
          1998. The goal of the department is to offer a world-class learning
          and research environment to the students with high ethical values with
          a view to grooming them as highly competent engineers for the society.
          The team of highly qualified and industry-trained faculty moulds the
          students for widening their intellectual horizons through effective
          career guidance and support, in order to become entrepreneurs or be
          recruited by globally reputed companies.
        </p>
      </div>
    </div>
  );
};

export default About;

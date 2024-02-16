import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";

const page = () => {
  return (
    <main className="bg-[#151515]">
      <div className="px-2 md:px-6 py-2 md:pt-6 min-h-screen bg-cover bg-[url('/color-sharp.png')] bg-right-bottom">
        <div className="w-[96vw] m-auto ">
          {" "}
          <Navbar />
        </div>

        <div className="w-[90vw] m-auto my-[40px flex flex-col py-[40px] gap-4">
          <div className="flex flex-col md:flex-row md:justify-evenly gap-4">
            {" "}
            <div className="card w-full min-h-[300px] md:w-[40%] bg-base-100 shadow-xl image-full">
              <figure>
                <img src="/mechanical/1.png" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-4xl">Mechanical Videos</h2>
                <p>
                  Learn mechanical engineering topics without being at the
                  mechanical lab? yes, visit to experience next gen learning
                  paradigm
                </p>
                <div className="card-actions justify-end">
                  <Link href={"/categories/mechanical"}>
                    <button className="btn btn-primary">Learn</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card w-full min-h-[300px] md:w-[40%] bg-base-100 shadow-xl image-full">
              <figure>
                <img src="/physics/05.png" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-4xl">Physics Videos</h2>
                <p>
                  Curated collection of interesting Physics topics just for you
                  to learn in VR!
                </p>
                <div className="card-actions justify-end">
                  <Link href={"/categories/physics"}>
                    {" "}
                    <button className="btn btn-primary">Learn</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-evenly gap-4">
            {" "}
            <div className="card w-full min-h-[300px] md:w-[40%] bg-base-100 shadow-xl image-full">
              <figure>
                <img src="/ece/44.png" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-4xl">EEE Videos</h2>
                <p>
                  Curated collection of interesting EEE topics just for you!
                </p>
                <div className="card-actions justify-end">
                  <Link href={"/categories/ece"}>
                    {" "}
                    <button className="btn btn-primary">Learn</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card w-full min-h-[300px] md:w-[40%] bg-base-100 shadow-xl image-full">
              <figure>
                <img src="/math/29.png" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-4xl">Math Videos</h2>
                <p>
                  Curated collection of interesting math topics just for you!
                </p>
                <div className="card-actions justify-end">
                  <Link href={"/categories/math"}>
                    {" "}
                    <button className="btn btn-primary">Learn</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;

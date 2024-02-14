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
          <div className="flex flex-row justify-evenly gap-4">
            {" "}
            <div className="card w-[40%] bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-4xl">Mechanical Videos</h2>
                <p>
                  Learn mechanical engineering topics without being at the
                  mechanical lab? yes, visit to experience next gen learning
                  paradigm
                </p>
                <div className="card-actions justify-end">
                  <Link href={"/mechanical"}>
                    <button className="btn btn-primary">Learn</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card w-[40%] bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-4xl">Mathematics Videos</h2>
                <p>
                  Curated collection of interesting math topics just for you!
                </p>
                <div className="card-actions justify-end">
                  <Link href={"/math"}>
                    {" "}
                    <button className="btn btn-primary">Learn</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-evenly gap-4">
            {" "}
            <div className="card w-[40%] bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-4xl">EEE Videos</h2>
                <p>
                  Curated collection of interesting EEE topics just for you!
                </p>
                <div className="card-actions justify-end">
                  <Link href={"/math"}>
                    {" "}
                    <button className="btn btn-primary">Learn</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card w-[40%] bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-4xl">Mathematics Videos</h2>
                <p>
                  Curated collection of interesting math topics just for you!
                </p>
                <div className="card-actions justify-end">
                  <Link href={"/math"}>
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

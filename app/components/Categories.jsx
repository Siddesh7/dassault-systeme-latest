"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

const Categories = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: {max: 4000, min: 3000},
      items: 5,
    },
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 3,
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 2,
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1,
    },
  };

  return (
    <section className="relative">
      <div className="w-[92vw] m-auto mt-[-40px] pb-[50px]">
        {" "}
        <div className="py-[50px]">
          <div className="bg-[#151515] rounded-[64px] text-center px-[30px] md:px-[50px] mt-[-60px] py-[50px]">
            <h2 className="text-[45px] font-bold">Experiments</h2>
            <p className="text-[#b8b8b8] text-[18px] tracking-[0.8px] leading-[1.5em] my-[14px] mb-[75px]">
              Experiments created using virtual reality (VR) technology.
            </p>

            <Carousel
              responsive={responsive}
              infinite={true}
              className="owl-carousel owl-theme skill-slider owl-loaded owl-drag px-[70px] md:px-[120px] z-[2]"
            >
              <Link
                href="/categories/mechanical"
                className="w-[180px] h-[200px] flex flex-col justify-center items-center"
              >
                <img src={"/mech-n.png"} alt="Image" className="w-[100%]" />
                <h5>Mechanical</h5>
              </Link>
              <Link
                href="/categories/physics"
                className="w-[180px] h-[200px] flex flex-col justify-center items-center"
              >
                <img
                  src={"/physics-logo.png"}
                  alt="Image"
                  className="w-[100%]"
                />
                <h5>Physics</h5>
              </Link>
              <Link
                href="/categories/math"
                className="w-[180px] h-[200px] flex flex-col justify-center items-center"
              >
                <img src={"/match.png"} alt="Image" className="w-[100%]" />
                <h5>Maths</h5>
              </Link>
              <Link
                href="/categories/ece"
                className="w-[180px] h-[200px] flex flex-col justify-center items-center"
              >
                <img
                  src={"/eee.jpeg"}
                  alt="Image"
                  className="w-[100%] rounded-full"
                />
                <h5>EEE/ECE</h5>
              </Link>
            </Carousel>
          </div>
        </div>
      </div>{" "}
      <img
        className="absolute top-24 bottom-0 z-[1] w-[40%]"
        src={"/color-sharp.png"}
        alt="Image"
      />
    </section>
  );
};

export default Categories;

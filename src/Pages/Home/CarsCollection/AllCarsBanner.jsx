import Marquee from "react-marquee";
import useMovementHook from "../../../Hooks/useMovementHook";
import img1 from "../../../Images/cars_banner/banner3.jpg";
import { useEffect, useState } from "react";

const AllCarsBanner = () => {
  const [ref, isVisible] = useMovementHook();

  const handleClick = () => {};

  return (
    <div>
      <div
        className="hero min-h-screen bg-[url('https://i.ibb.co.com/Pv5dRDqy/banner1.jpg')] bg-cover bg-center "
        style={{
          backgroundImage: `url(${img1})`,
        }}>
        <div className="hero-overlay backdrop-blur-sm bg-white/10"></div>
        <div className="  hero-content  text-neutral-content text-center">
          <div ref={ref} className={`${isVisible ? "movement" : ""}`}>
            <h1 className="mb-5 banner text-4xl font-bold">
              "Drive Your Dreams Today!" or "Your Next Car Awaits You."
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button onClick={handleClick} className="btn btn-primary">
              View Available Cars
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCarsBanner;

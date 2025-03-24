import { FaVideo, FaX } from "react-icons/fa6";
import img from "../../Images/cars_banner/banner2.jpg";
import { FaPhotoVideo } from "react-icons/fa";
import "boxicons";
import { MdSlowMotionVideo } from "react-icons/md";
import { useState } from "react";
import { TbHandFingerDown } from "react-icons/tb";

const RidersBanner = () => {
  const [ShowVedio, setShowVedio] = useState(false);
  const handlePlayVedio = () => {
    setShowVedio(true);
     
  };
 
  const handleCloseVideo = () => {
    setShowVedio(false);
  };


 



  return (
    <>
      <div
        className="hero mt-10 rounded-3xl min-h-screen"
        style={{
          backgroundImage: `url(${img})`,
          borderRadius: "30px",
        }}>
        <div className="hero-overlay"></div>
        <div className="  hero-content  text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 banner md:px-15 text-4xl font-bold">
              "Drive Your Dreams Today!" or "Your Next Car Awaits You."
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

<div className="absolute  mt-6"> 
<h2 className="font-bold flex items-center">Click Down <TbHandFingerDown className="text-5xl"></TbHandFingerDown> </h2>

<button onClick={handlePlayVedio} className="text-9xl cursor-pointer  text-red-500">
  <MdSlowMotionVideo  ></MdSlowMotionVideo>
</button>
</div>
          </div>
        </div>
      </div>

{
    ShowVedio &&
     <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
     <div className="relative w-full max-w-4xl">
       <button 
         onClick={handleCloseVideo} 
         className="absolute top-4 right-4 bg-white p-2 rounded-full"
       >
        <FaX></FaX>
       </button>
       <iframe
         width="100%"
         height="500"
         src="https://www.youtube.com/embed/dRgHgOJ65wE?autoplay=1"
         title="2025 Bendix Racing Camaro Livery Reveal"
         frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         referrerPolicy="strict-origin-when-cross-origin"
         allowFullScreen
       ></iframe>
     </div>
   </div>
}


    </>
  );
};

export default RidersBanner;

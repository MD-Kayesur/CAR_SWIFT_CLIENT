import { NavLink, useNavigate } from "react-router-dom";

 import img1 from '../../Images/car_imgs/car4.jpg'
import img2 from '../../Images/car_imgs/car9.jpg'
const NextJourney = () => {

const Navigate = useNavigate()
const handleClick =()=>{
    Navigate('/availablecars')
}


    return (
        <div
        className="hero bg-fixed bg-cover  md:mb-10 min-h-screen"
        style={{
          backgroundImage: `url(${img1})`,
        }}>
        {/* <div className="hero-overlay"></div> */}
        <div className="hero-content text-neutral-content text-center">
          <div className="hero    ">
            <div className="   hero-content flex-col md:relative  lg:flex-row">
              <div className="bg-gradient-to-r flex-1/2 from-orange-500 to-purple-500  p-3 rounded-3xl ">
              <img src={img2} className=" md:w-[500px]  rounded-lg shadow-2xl" />
  
              </div>
  
              <div className="text-left flex-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-10 rounded-3xl ">
                <h1 className="text-3xl   text-white font-bold">
                "Experience the Ultimate Ride with Luxury Wheels - Your Next Journey Awaits!
                </h1>
               <p className="my-5">"Experience the Ultimate Ride with Luxury Wheels - Your Next Journey Awaits!</p>
                <NavLink to='/' className="btn md:m-2 btn-primary">Book Now</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default NextJourney;
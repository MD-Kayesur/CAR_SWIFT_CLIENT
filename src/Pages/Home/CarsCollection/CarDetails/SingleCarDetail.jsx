import { NavLink } from "react-router-dom";
import useMovementHook from "../../../../Hooks/useMovementHook";

const SingleCarDetail = ({ car }) => {


    const [ref, isVisible] = useMovementHook();
  return (
    <>
      <div>
        <div ref={ref}  className={`hero bg-base-200 min-h-screen  ${isVisible ? "movement" : ""}`}>
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={car.Image_url}
              alt={car.Car_Model}
              className="w-full h-48 object-cover"
            />
            <div>
              <h3 className="text-xl font-bold">{car.Car_Model}</h3>
              <p className="text-gray-600">{car.Daily_Rental_Price}</p>

              <p className="text-gray-400">Bookings: {car.bookingCount}</p>
              <p className="text-gray-400">Added {car.Vehicle_Registration_Number}</p>

              <div className="p-4">
                {car.Availability ? "Available" : "Not Available"}
              </div>
              <p
                className={`text-sm ${
                  car.Availability ? "text-green-500" : "text-red-500"
                }`}></p>
                 <div className=" flex items-center gap-3 justify-between">
          <NavLink to="/availablecars" className="btn btn-primary">
              {" "}
              Available Cars
            </NavLink>

            <NavLink to="/alldiscountscars" className="btn   btn-primary">
              {" "}
              all Discount Cars{" "}
            </NavLink>
          </div>
            </div>

           
          </div>
          
        </div>
         
        
      </div>
    </>
  );
};

export default SingleCarDetail;

import { NavLink } from "react-router-dom";

const SingleCarDetail = ({ car }) => {
  return (
    <>
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={car.image}
              alt={car.model}
              className="w-full h-48 object-cover"
            />
            <div>
              <h3 className="text-xl font-bold">{car.model}</h3>
              <p className="text-gray-600">{car.price}</p>

              <p className="text-gray-400">Bookings: {car.booking_count}</p>
              <p className="text-gray-400">Added {car.date_posted}</p>

              <div className="p-4">
                {car.availability ? "Available" : "Not Available"}
              </div>
              <p
                className={`text-sm ${
                  car.availability ? "text-green-500" : "text-red-500"
                }`}></p>
                 <div className=" flex items-center justify-between">
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

import { useQuery } from "@tanstack/react-query";
import useAxious from "../../Hooks/useAxious";

 

const MyBooking = () => {

    const AxiousURL = useAxious();
    const { refetch, data: BookingCars = [] } = useQuery({
      queryKey: ["BookingCars"],
      queryFn: async () => {
        const result = await AxiousURL.get("/BookingCar");
        return refetch, result.data;
      },
    });



    return (


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {BookingCars?.map((car) =>  
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={car?.Image_url}
              alt={car?.model}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{car?.model}</h3>
              <p className="text-gray-600">{car?.Car_Model}</p>
              <p
                className={`text-sm ${
                  car?.Availability ? "text-green-500" : "text-red-500"
                }`}>
                {car?.Availability ? "Available" : "Not Available"}
              </p>
              <p className="text-gray-400">Bookings: {car?.booking_count}</p>
              <p className="text-gray-400">Added {car?.date_posted}</p>
            </div>
            <div className="flex justify-between items-center px-4">
              <div className="text-right my-4">
                <button 
                // onClick={() => handleDetails(car?._id)} 
                className="btn ">
                  Details
                </button>
              </div>
              <div className="text-right my-4">
                <button 
                // onClick={()=>handleBookNow(car)} 
                className="btn ">
                  Book Now
                </button>
              </div>
             
            </div>



             {/* Pagination */}

      
          </div>
        )}
      </div>
        // <h2>sedfthgsfgdhfdgh</h2>
    );
};

export default MyBooking;
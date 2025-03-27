import { useQuery } from "@tanstack/react-query";
import useAxious from "../../Hooks/useAxious";
import useMovementHook from "../../Hooks/useMovementHook";
import { useState } from "react";

 

const MyBooking = () => {

    const AxiousURL = useAxious();
    const { refetch, data: BookingCars = [] } = useQuery({
      queryKey: ["BookingCars"],
      queryFn: async () => {
        const result = await AxiousURL.get("/BookingCar");
        return refetch, result.data;
      },
    });


 // Pagination
   
     const [currentPage, setCurrentPage] = useState(1);
     const itemsPerPage = 6;
   
     const startIndex = (currentPage - 1) * itemsPerPage;
     const endIndex = startIndex + itemsPerPage;
     const totalPages = Math.ceil(BookingCars.length / itemsPerPage);
     const BookingCarss = BookingCars.slice(startIndex, endIndex);
   

    const [ref, isVisible] = useMovementHook();

    return (

<>
        <div ref={ref}  className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 ${isVisible ? "movement" : ""}`}>
        {BookingCarss?.map((car) =>  
          <div  className={`bg-white shadow-lg rounded-lg overflow-hidden `}>
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
        


        {/* pagination */}


        <div className="flex justify-center mt-5">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="btn btn-outline mr-2">
          Previous
        </button>

        {[...Array(totalPages).keys()].map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number + 1)}
            className={`btn mx-1 ${
              currentPage === number + 1 ? "btn-primary" : "btn-outline"
            }`}>
            {number + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="btn btn-outline ml-2">
          Next
        </button>
      </div>
</>
    );
};

export default MyBooking;
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Marquee from "react-marquee";
import AllCarsBanner from "./AllCarsBanner";
import useAxious from "../../../Hooks/useAxious";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useMovementHook from "../../../Hooks/useMovementHook";
import { AuthContext } from "../../../authentication/AuthProvider";

const CorCollection = () => {
  const navigate = useNavigate();
  // const [allcars, setallcars] = useState([]);
  const AxiousURL = useAxious();
const {user}= useContext(AuthContext)
  const { refetch, data: CarCollection = [] } = useQuery({
    queryKey: ["CarCollection"],
    queryFn: async () => {
      const result = await AxiousURL.get("/MyCars");
      return refetch, result.data;
    },
  });

  console.log(CarCollection);

  // console.log(datas)
  // useEffect(() => {
  //   fetch("../../../public/AllCars.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setallcars(data);
  //     });
  // }, []);

  // carDEtails butn

  const handleDetails = (id) => {
    navigate(`/cardetails/${id}`);
  };

  // handleBookNow btn

  const handleBookNow = (car) => {
    AxiousURL.post('/BookingCar',car)
    .then(res=>{
console.log(res.data)
      Swal.fire({
              title: " success!",
              icon: "success",
              draggable: true,
    })
    navigate('/mybooking')
  })
  }
 

     // Pagination
   
     const [currentPage, setCurrentPage] = useState(1);
     const itemsPerPage = 6;
   
     const startIndex = (currentPage - 1) * itemsPerPage;
     const endIndex = startIndex + itemsPerPage;
     const totalPages = Math.ceil(CarCollection.length / itemsPerPage);
     const CarCollections = CarCollection.slice(startIndex, endIndex);
   
console.log(CarCollections)

const [ref, isVisible] = useMovementHook();
  
  return (
    <div>
      <div className="mb-5">
        <AllCarsBanner></AllCarsBanner>
      </div>
      <div ref={ref}  className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4  ${isVisible ? "movement" : ""}`}>
        {CarCollection?.map((car) => (car?.Availability === 'true' ? <>
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
                <button onClick={() => handleDetails(car?._id)} className="btn ">
                  Details
                </button>
              </div>

              {
                user? <div className="text-right my-4">
                <button onClick={()=>handleBookNow(car)} className="btn ">
                  Book Now
                </button>
              </div>: <></>
              }
              
            </div>



             {/* Pagination */}

          </div>
      
        </> : <></>))}
      </div>
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
    </div>
  );
};

export default CorCollection;

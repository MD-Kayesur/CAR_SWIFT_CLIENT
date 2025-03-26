import React, { useContext, useEffect, useState } from "react";
import CorCollection from "./CorCollection";
import { useNavigate } from "react-router-dom";
import useMovementHook from "../../../Hooks/useMovementHook";
import useAxious from "../../../Hooks/useAxious";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { AuthContext } from "../../../authentication/AuthProvider";

const CarsCollections = () => {
  const navogate = useNavigate();
const {user}= useContext(AuthContext)
  //   const [cars, setcars] = useState([]);
  // console.log(datas)
  const AxiousURL = useAxious();
  const { refetch, data: CarsCollections = [] } = useQuery({
    queryKey: ["CarsCollections"],
    queryFn: async () => {
      const result = await AxiousURL.get("/MyCars");
      return refetch, result.data;
    },
  });

  //   useEffect(() => {
  //     fetch("../../../public/AllCars.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setcars(data);
  //       });
  //   }, []);

  // carDEtails butn

  const handleDetails = (id) => {
    navogate(`/cardetails/${id}`);
  };

  // handleShowAll btn

  const handleShowAll = () => {
    navogate("/availablecars");
  };

  // handleBookNow btn

  const handleBookNow = (car) => {
    AxiousURL.post("/BookingCar", car).then((res) => {
      console.log(res.data);
      Swal.fire({
        title: " success!",
        icon: "success",
        draggable: true,
      });
      navogate('/mybooking')
    });
  };

    const [ref, isVisible] = useMovementHook();

  return (
    <>
      <div ref={ref}  className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4   ${isVisible ? "movement" : ""} `}>
        {CarsCollections?.slice(0, 5).map((car) => (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={car.Image_url}
              alt={car.model}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{car.Car_Model}</h3>
              <p className="text-gray-600">{car.pDaily_Rental_Pricerice}</p>
              <p
                className={`text-sm ${
                  car.Availability ? "text-green-500" : "text-red-500"
                }`}>
                {car.Availability ? "Available" : "Not Available"}
              </p>
              <p className="text-gray-400">Bookings: {car.bookingCount}</p>
              <p className="text-gray-400">Added {car.Location}</p>
            </div>
            <div className="flex justify-between items-center px-4">
              <div className="text-right my-4">
                <button onClick={() => handleDetails(car._id)} className="btn ">
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
          </div>
        ))}
      </div>

      <div className="text-right my-4">
        <button onClick={handleShowAll} className="btn ">
          Show All
        </button>
      </div>
    </>
  );
};

export default CarsCollections;

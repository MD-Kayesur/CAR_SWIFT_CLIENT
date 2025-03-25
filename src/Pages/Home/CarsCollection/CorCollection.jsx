import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Marquee from "react-marquee";
import AllCarsBanner from "./AllCarsBanner";
import useAxious from "../../../Hooks/useAxious";
import { useQuery } from "@tanstack/react-query";

const CorCollection = () => {
  const navigate = useNavigate();
  // const [allcars, setallcars] = useState([]);
  const AxiousURL = useAxious();

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

  const handleBookNow = () => {
    navigate("/mybooking");
  };

  return (
    <div>
      <div className="mb-5">
        <AllCarsBanner></AllCarsBanner>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
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
                <button onClick={() => handleDetails(car?.id)} className="btn ">
                  Details
                </button>
              </div>
              <div className="text-right my-4">
                <button onClick={handleBookNow} className="btn ">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </> : <></>))}
      </div>
    </div>
  );
};

export default CorCollection;

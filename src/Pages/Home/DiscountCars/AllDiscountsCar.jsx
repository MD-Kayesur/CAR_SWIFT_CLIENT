import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAxious from "../../../Hooks/useAxious";
import { useQuery } from "@tanstack/react-query";

const AllDiscountsCar = () => {
  const navogate = useNavigate();
  const [discounts, setdiscounts] = useState([]);
  console.log(discounts);

  const AxiousURL = useAxious();
  const { refetch, data: AllDiscountsCar = [] } = useQuery({
    queryKey: ["AllDiscountsCar"],
    queryFn: async () => {
      const result = await AxiousURL.get("/DiscountCar");
      return refetch, result.data;
    },
  });

  // useEffect(()=>{
  //     fetch('../../../public/DiscountCars.json')
  //     .then(res=>res.json())
  //     .then(data=>{
  //         setdiscounts(data)
  //     })
  // },[])

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {AllDiscountsCar.map((discount, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={discount.img}
              alt={discount.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {discount.title}
              </h3>
              <p className="text-gray-600">{discount.description}</p>
              <div className="mt-4">
                <span className="text-lg font-bold text-green-500">
                  {discount.save} Off
                </span>
              </div>
              <div className="text-right my-4">
                <NavLink to={`discountdetails/${discount.id}`} className="btn ">
                  {" "}
                  See details
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllDiscountsCar;

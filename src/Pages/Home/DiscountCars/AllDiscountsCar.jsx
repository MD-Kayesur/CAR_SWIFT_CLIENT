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


     // Pagination
   
     const [currentPage, setCurrentPage] = useState(1);
     const itemsPerPage = 6;
   
     const startIndex = (currentPage - 1) * itemsPerPage;
     const endIndex = startIndex + itemsPerPage;
     const totalPages = Math.ceil(AllDiscountsCar.length / itemsPerPage);
     const AllDiscountsCars = AllDiscountsCar.slice(startIndex, endIndex);
   

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {AllDiscountsCars.map((discount, index) => (
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
        {/* Pagination */}
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
    </>
  );
};

export default AllDiscountsCar;

import { useQuery } from "@tanstack/react-query";
import useAxious from "../../Hooks/useAxious";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";

 

const MyCars = () => {

    const AxiousURL = useAxious();
  const { refetch, data: MyCars = [] } = useQuery({
    queryKey: ["MyCars"],
    queryFn: async () => {
      const result = await AxiousURL.get("/MyCars");
      return refetch, result.data;
    },
  });




  const HandleDElate = (id) => {

  
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
         
      if (result.isConfirmed) {
        AxiousURL.delete(`/MyCars/${id}`).then((res) => {
           console.log(res)
          if (res.data.deletedCount > 0) {

            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };








  // Pagination

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(MyCars.length / itemsPerPage);
  const MyCarse = MyCars.slice(startIndex, endIndex);

  console.log(MyCars)
    return (
        <div>
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {MyCarse?.map((car) =>  
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={car?.Image_url}
              alt={car?.model}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{car?.Car_Model}</h3>
              <p className="text-gray-600">{car?.Daily_Rental_Price}</p>
              {/* <p>
                 
                {car?.Availability === "true" ? <p className="text-green-500">"Available"</p> : <p className="text-red-500">"Not Available" </p> }
              </p> */}

<p
                className={`text-sm ${
                  car?.Availability ==="true"? "text-green-500" : "text-red-500"
                }`}>
                {car?.Availability === "true" ? "Available" : "Not Available"}
              </p>



              <p className="text-gray-400">Bookings: {car?.bookingcount}</p>
              <p className="text-gray-400">Added {car?.Availability}</p>
            </div>
            <div className="flex justify-between items-center px-4">
            <div className="  my-4 ">
                < NavLink
                  to={`/updatecars/${car._id}`}
                className="btn   ">
                 UpDate_CarData
                </ NavLink>
              </div>
              <div className="  my-4 ">
                < button
                 onClick={()=>HandleDElate(car)}
                className="btn  bg-red-500 text-white ">
                  Delete
                </ button>
              </div>
              
               
            </div>
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


        </div>
    );
};

export default MyCars;
import { QueryCache, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxious from "../../../Hooks/useAxious";
import { useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../../Providers/AuthProviders";

const AllUser = () => {
  // const [user,setusers]= useState([])
  const AxiousURL = useAxious();
  const { user } = useContext(AuthContext);
  const isAdmin = user?.email === "iamadmin@gmaill.com";

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await AxiousURL.get("/users");
      return refetch, result.data;
    },
  });

//   console.log(users);
  const handleDelet = (user) => {
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
        AxiousURL.delete(`/users/${user._id}`).then((res) => {
        //   console.log(res.data);
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

  return (
    <div className="overflow-x-auto">
      <div>
        <h2 className="text-3xl  font-bold px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          total users : {users.length}
        </h2>
      </div>
      <table className="table py-5 table-zebra">
        {/* head */}
        <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>email</th>
            <th> Role</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.email === "iamadmin@gmail.com" ? "admin" : ""}</td>
              <td>
                {/* <button
                  onClick={() => handleDelet(user)}
                  className="btn btn-ghost btn-lg text-red-500">
                  {user.email === "iamadmin@gmail.com" ? (
                    <FaTrash className="hidden" />
                  ) : (
                    <FaTrash />
                  )}
                </button> */}

<button
        onClick={() => handleDelet(user)}
        className={`btn btn-ghost btn-lg ${user.email === "iamadmin@gmail.com" ? "text-gray-400 cursor-not-allowed" : "text-red-500"}`}
        disabled={user.email === "iamadmin@gmail.com"}
      >
        <FaTrash />
      </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;

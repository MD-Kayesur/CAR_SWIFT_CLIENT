 
 
import {  NavLink, useNavigate } from "react-router-dom";
 
 
import Swal from "sweetalert2";
import { AuthContext } from "../../authentication/AuthProvider";
import { useContext } from "react";
import { getCurrentDateTime } from "../../Hooks/TimeHook";
import useMovementHook from "../../Hooks/useMovementHook";

const MyProfile = () => {
  const { user,signout } = useContext(AuthContext);
  const Navigate = useNavigate();
 

  const date = getCurrentDateTime(); // 2025-03-20 14:35:20
  // const time =(getCurrentDateTime('/', '.'));    // 2025/03/20 14.35.20
  // const  date = (getCurrentDateTime('-', '', 'and', '' ,'-'));

   const name = user?.auth?.currentUser?.displayName;
  const photo = user?.auth?.currentUser?.photoURL;
   
  const handlerSignout = () => { 
    signout().then(() => {
      Swal.fire({
        title: " success!",
        icon: "success",
        draggable: true,
      });
      Navigate("/login");
    });
  };

  const [ref, isVisible] = useMovementHook();
  return (
     <div
          className="hero bg-fixed bg-cover  md:mb-10     bg-gradient-to-r from-blue-500 to-purple-500 text-white ">
          {/* <div className="hero-overlay"></div> */}
          <div className="hero-content text-neutral-content text-center">
            <div className="hero    ">
              <div className="  hero-content flex-col md:relative  lg:flex-row">
                <img src={name} className="max-w-xs  rounded-lg shadow-2xl" />
    
                <div ref={ref}  className={`text-left ${isVisible ? "movement" : ""}`} >
                  <h1 className="text-3xl   text-white font-bold">
                    Name : {photo}{" "}
                  </h1>
                  <h1 className="text-xl   text-white font-bold">
                    Email: {user?.email}{" "}
                  </h1>
                 <h2>Log in time : {date}</h2>
                 <NavLink onClick={handlerSignout}  className='btn btn-outline text-white m-20 btn-warning'  >Log Out</NavLink> 

                </div>

              </div>
              
            </div>
          </div>
        </div>
  );
};

export default MyProfile;

import { useContext } from "react";

import Swal from "sweetalert2";
import { NavLink,   useNavigate } from "react-router-dom";

import { FaGoogle } from "react-icons/fa";
 
import animationData from "../../src/Images/lottie/Animation 1.json";
import Lottie from "react-lottie";
// import useAxious from "../Hooks/useAxious";
import { AuthContext } from "./AuthProvider";
function Signup() {
  const { Signup, updateProfil, GoogleLogIn } = useContext(AuthContext);
  // const navigat = useNavigate();
  const Navigate = useNavigate();

//   const AxiousURL = useAxious();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.Password.value;
    const photourl = form.photourl.value;
    // console.log(name, photourl);

    // signup ruls from firebase
    Signup(email, password).then(() => {
      // using updateProfil for show user name and picture

      updateProfil(name, photourl).then(() => {
        const userInfo = {
          email,
          password,
          photourl,
        };
        // AxiousURL.post("/users", userInfo).then((res) => {
    //       // console.log(res.data);

          if (res.data.insertedId) {
            Swal.fire({
              title: " success!",
              icon: "success",
              draggable: true,
            });
          }
        });

        Navigate("/");
    //   });
    });
  };

  const handleGoogleLogin = () => {
    GoogleLogIn()
  
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className=" hero bg-base-200  pt-29  ">
        <div className="md:flex">
          <div>
            <div className=" text-center  lg:text-left">
              <h1 className="text-5xl font-bold">Sign up now!!</h1>
            </div>
            <Lottie options={defaultOptions} height={400} width={400}></Lottie>
          </div>
          <div className="hero-content flex-col  ">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleSubmit} className="card-body">
                <fieldset className="fieldset">
                  <label className="fieldset-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="name"
                  />
                  <label className="fieldset-label">Photo URL</label>
                  <input
                    type="text"
                    name="photourl"
                    className="input"
                    placeholder="Photo URL"
                  />
                  <label className="fieldset-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="fieldset-label">Password</label>
                  <input
                    type="password"
                    name="Password"
                    className="input"
                    placeholder="Password"
                  />

                  <button className="btn   btn-primary  mt-4">signup</button>
                </fieldset>
              </form>
              <div className=" "></div>
              <button
                onClick={handleGoogleLogin}
                className="btn w-[200px] mx-auto   btn-primary  mt-4">
                <FaGoogle></FaGoogle> Google
              </button>
              <p className="m-3">
                Already Have An Account Please{" "}
                <NavLink className="text-xl font-bold" to="/login">
                  log in
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

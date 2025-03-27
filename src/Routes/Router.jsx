import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../authentication/Login";
import Signup from "../authentication/Signup";
import AddCar from "../Pages/Add_Car/AddCar";
import MyBooking from "../Pages/My_Bookings/MyBooking";
import MyCars from "../Pages/My_Cars/MyCars";
import CarsCollections from "../Pages/Home/CarsCollection/CarsCollections";

import AllDiscountsCar from "../Pages/Home/DiscountCars/AllDiscountsCar";
import Discountetails from "../Pages/Home/DiscountCars/DiscountDetails/Discountetails";
import CarDetails from "../Pages/Home/CarsCollection/CarDetails/CarDetails";
import DashBord from "../Pages/DashBord/DashBord";
import MyProfile from "../Pages/DashBord/MyProfile";
import AllUser from "../Pages/DashBord/AllUser";
import CorCollection from "../Pages/Home/CarsCollection/CorCollection";
import PrivateRoute from "../ProivetRout/PrivateRoute";
import UpdateCars from "../Pages/My_Cars/UpdateCars";
// import UpdateCars from "../Pages/My_Cars/UpdateCars";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/availablecars",
        element: <CorCollection></CorCollection>,
      },
      {
        path: "/cardetails/:id",
        element: (
          <PrivateRoute>
            <CarDetails></CarDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/alldiscountscars",
        element: <AllDiscountsCar></AllDiscountsCar>,
      },
      {
        path: "/alldiscountscars/discountdetails/:id",
        element: (
          <PrivateRoute>
            <Discountetails></Discountetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/addcard",
        element: (
          <PrivateRoute>
            <AddCar></AddCar>
          </PrivateRoute>
        ),
      },
      {
        path: "/mybooking",
        element: (
          <PrivateRoute>
            <MyBooking></MyBooking>
          </PrivateRoute>
        ),
      },
      {
        path: "/mycars",
        element: (
          <PrivateRoute>
            <MyCars></MyCars>
          </PrivateRoute>
        ),
      },
      {
        path: "/updatecars/:id",
        element: <UpdateCars></UpdateCars>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashbord",
    element: <DashBord></DashBord>,
    children: [
      {
        path: "myprofile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "allusers",
        element: <AllUser></AllUser>,
      },
    ],
  },
]);

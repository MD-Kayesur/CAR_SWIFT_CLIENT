import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../authentication/Login";
import Signup from "../authentication/Signup";
import SvailableCars from "../Pages/Available_Cars/SvailableCars";
import AddCar from "../Pages/Add_Car/AddCar";
import MyBooking from "../Pages/My_Bookings/MyBooking";
import MyCars from "../Pages/My_Cars/MyCars";
import CarsCollections from "../Pages/Home/CarsCollection/CarsCollections";
import CorCollection from "../Pages/Home/CarsCollection/CorCollection";
import AllDiscountsCar from "../Pages/Home/DiscountCars/AllDiscountsCar";
import Discountetails from "../Pages/Home/DiscountCars/DiscountDetails/Discountetails";
import CarDetails from "../Pages/Home/CarsCollection/CarDetails/CarDetails";

 
export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/availablecars',
            element:<CorCollection></CorCollection>
        },
        {
            path:'/cardetails/:id',
            element:<CarDetails></CarDetails>
        },
        {
            path:'/alldiscountscars',
            element:<AllDiscountsCar></AllDiscountsCar>
        },
        {
            path:'/alldiscountscars/discountdetails/:id',
            element:<Discountetails></Discountetails>
        },
        {
            path:'/addcard',
            element:<   ><AddCar></AddCar></   >
        },
        {
            path:'/mybooking',
            element:<MyBooking></MyBooking>
        },
        {
            path:'/mycars',
            element:<MyCars></MyCars>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Signup></Signup>
        }, 
      ]
    },
    // {
    //     path:'/dashbord',
    //     element:<DashBors></DashBors>,
    //     children:[ 
    //         {
    //             path: "myprofile",
    //             element: <MyProfile></MyProfile>,
    //           }, 
    //         {
    //             path: "allusers",
    //             element: < AllUsers></ AllUsers>,
    //           },
    //     ]
    // }
  ]);

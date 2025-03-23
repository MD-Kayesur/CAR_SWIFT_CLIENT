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
        // {
        //     path:'/agreenent/:id',
        //     element:<PrivateRoute ><AgreeMent></AgreeMent></PrivateRoute >,
        //     // loader:({params})=> fetch(`http://localhost:5173/agreenent/${params.id}`)
        // },
        // {
        //     path:'/details/:id',
        //     element:<PrivateRoute ><Details></Details></PrivateRoute > ,
        //     // loader:({params})=> fetch(`http://localhost:5173/agreenent/${params.id}`)
        // },
        // {
        //     path:'/cupondetails/:id',
        //     element:<PrivateRoute>< CuponDetails></ CuponDetails></PrivateRoute>,
        //     // loader:({params})=> fetch(`http://localhost:5173/agreenent/${params.id}`)
        // },
        // {
        //     path:'/allcupons',
        //     element:<PrivateRoute>< AllCupons></ AllCupons></PrivateRoute>,
        //     // loader:({params})=> fetch(`http://localhost:5173/agreenent/${params.id}`)
        // },
        // {
        //     path:'/location',
        //     element:<PrivateRoute>< Location></ Location></PrivateRoute>,
        //     // loader:({params})=> fetch(`http://localhost:5173/agreenent/${params.id}`)
        // },
      ]
    },
  ]);

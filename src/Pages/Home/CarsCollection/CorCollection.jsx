import { useEffect, useState } from "react";

 

const CorCollection = () => {

const [cars,setcars] = useState([])
// console.log(datas)
useEffect(()=>{
    fetch('../../../public/AllCars.json')
    .then(res=>res.json())
    .then(data=>{
        setcars(data)
    })
},[])




    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
      {cars.slice(0,4).map((car) => <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src={car.image} alt={car.model} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold">{car.model}</h3>
      <p className="text-gray-600">{car.price}</p>
      <p className={`text-sm ${car.availability ? 'text-green-500' : 'text-red-500'}`}>
        {car.availability ? 'Available' : 'Not Available'}
      </p>
      <p className="text-gray-400">Bookings: {car.booking_count}</p>
      <p className="text-gray-400">Added {car.date_posted}</p>
    </div>
  </div>  )}
    </div>
    );
};

export default CorCollection;
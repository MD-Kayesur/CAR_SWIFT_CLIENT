import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxious from "../../../Hooks/useAxious";
import { useQuery } from "@tanstack/react-query";
import useMovementHook from "../../../Hooks/useMovementHook";

 

const DiscountCars = () => {
        const navogate = useNavigate()
    const [discounts,setdiscounts] = useState([])
    console.log(discounts)

    const AxiousURL = useAxious();
    const { refetch, data: DiscountCars = [] } = useQuery({
      queryKey: ["DiscountCars"],
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
    

    const handleDetails =(id)=>{
        navogate(`/alldiscountscars/discountdetails/${id}`)
    }



    const handleClick =()=>{
        navogate('/alldiscountscars')
    }
    const [ref, isVisible] = useMovementHook();

    return (

<>

        <div ref={ref}  className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 ${isVisible ? "movement" : ""}`}>
      {DiscountCars.slice(0,4).map((discount, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={discount.img} alt={discount.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">{discount.title}</h3>
            <p className="text-gray-600">{discount.description}</p>
            <div className="mt-4">
              <span className="text-lg font-bold text-green-500">{discount.save} Off</span>
            </div>
            <div className='text-right my-4'><button onClick={( )=>handleDetails(discount?.id)} className='btn '> See details</button></div>

          </div>
        </div>
      ))}
    </div>
    <div className='text-right my-4'><button onClick={handleClick} className='btn '>Show All</button></div>
      </>
    );
};

export default DiscountCars;
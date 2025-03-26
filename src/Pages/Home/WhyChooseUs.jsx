import { useEffect, useState } from "react";

 import img2 from '../../Images/car_imgs/car9.jpg'
import useAxious from "../../Hooks/useAxious";
import { useQuery } from "@tanstack/react-query";
import useMovementHook from "../../Hooks/useMovementHook";

const WhyChooseUs = () => {

const [datas,setDatas] = useState([])




const AxiousURL = useAxious();
  const { refetch, data: WhyChooseUs = [] } = useQuery({
    queryKey: ["WhyChooseUs"],
    queryFn: async () => {
      const result = await AxiousURL.get("/WhyChooseus");
      return refetch, result.data;
    },
  });



// useEffect(()=>{
//     fetch('../../../public/WhyChooseUs.json')
//     .then(res=>res.json())
//     .then(data=>{
//         setDatas(data)
//     })
// },[])
const [ref, isVisible] = useMovementHook();
    return (
        <div className="  md:flex md:flex-row-reverse gap-8">
           <div  className={`text-right `}> <h1 ref={ref}  className={`text-2xl ${isVisible ? "movement" : ""}`} >WHY CHOOSE US?</h1>
           <img className="mt-11 md:h-[300px] w-full rounded-2xl" src={img2} alt="" />
           </div>

         <div className="grid gap-10 grid-cols-2">
         {
            WhyChooseUs.map(data=> <div ref={ref}  className={`p-6  mt-3 bg-white rounded-lg shadow-md  bg-gradient-to-r from-orange-500 to-purple-500 text-white ${isVisible ? "movement" : ""}`}>
                <p className=" text-sm">{String(data.id).padStart(2, '0')}</p>
                <h2 className="text-xl font-bold my-2">{data.title}</h2>
                <p className=" ">{data.description}</p>
              </div>)
           }
         </div>
        </div>
    );
};

export default WhyChooseUs;
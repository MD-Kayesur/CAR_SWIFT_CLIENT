import { useEffect, useState } from "react";
import { FaCar } from "react-icons/fa6";
import useAxious from "../../Hooks/useAxious";
import { useQuery } from "@tanstack/react-query";
import useMovementHook from "../../Hooks/useMovementHook";

const RentingMode = () => {
const [datas,setDatas] = useState([])


const AxiousURL = useAxious();
  const { refetch, data: RentingMode = [] } = useQuery({
    queryKey: ["RentingMode"],
    queryFn: async () => {
      const result = await AxiousURL.get("/RentingModes");
      return refetch, result.data;
    },
  });


// useEffect(()=>{
//     fetch('../../../public/RentingMode.json')
//     .then(res=>res.json())
//     .then(data=>{
//         setDatas(data)
//     })
// },[])
const [ref, isVisible] = useMovementHook();
    return (
        <div ref={ref}  className={`grid gap-10 md:grid-cols-4  ${isVisible ? "movement" : ""}`}>
            {
                RentingMode.map(data=> <div className="bg-gray-100 p-8 rounded-2xl shadow-lg bg-gradient-to-r from-orange-500 to-purple-500 text-white ">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 ${data.color} bg-gray-200 rounded-full flex items-center justify-center`}>
                        <FaCar size={32} />
                      </div>
                    </div>
                    <h2 className="text-3xl font-semibold mb-4">{data.title}</h2>
                    <p className="text-white">{data.description}</p>
                  </div>)
            }
        </div>
    );
};

export default RentingMode;
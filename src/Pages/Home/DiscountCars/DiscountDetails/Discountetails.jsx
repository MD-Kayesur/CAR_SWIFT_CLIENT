import { useParams } from "react-router-dom";

 
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import SingleDiscountDetail from "./SingleDiscountDetail";
import useAxious from "../../../../Hooks/useAxious";
import { useQuery } from "@tanstack/react-query";

const Discountetails = () => {

const patams = useParams()
 
console.log(patams)

 
const [discounts,setdiscounts] = useState([])
console.log(discounts);

console.log(discounts)

const AxiousURL = useAxious();
  const { refetch, data: Discountetails = [] } = useQuery({
    queryKey: ["Discountetails"],
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


console.log(patams)
    return (
        <div>
           
           {
            Discountetails.map(item => item?.id == patams?.id  ? <>
            <SingleDiscountDetail item={item}></SingleDiscountDetail>
            </> : <></>)
           }
        </div>
    );
};

export default Discountetails;
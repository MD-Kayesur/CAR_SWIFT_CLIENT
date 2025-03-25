import { useEffect, useState } from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa6";
import SingleConstom from "./SingleConstom";
import { useQuery } from "@tanstack/react-query";
import useAxious from "../../../Hooks/useAxious";
const CostomerExparience = () => {
  const AxiousURL = useAxious();
  const [datas, setDatas] = useState([]);

  const { data: Costomer = [] } = useQuery({
    queryKey: ["Costomer"],
    queryFn: async () => {
      const reasult = await AxiousURL.get("/Costomer");
      return reasult.data;
    },
  });

  // useEffect(()=>{
  //     fetch('../../../public/Costomers.json')
  //     .then(res=>res.json())
  //     .then(data=>{
  //         setDatas(data)
  //     })
  // },[])

  return (
    <marquee scrollamount="20" behavior=" stop" direction="left">
      {" "}
      <div className="flex   gap-10">
        {Costomer.map((data) => (
          <SingleConstom data={data}></SingleConstom>
        ))}
      </div>
    </marquee>
  );
};

export default CostomerExparience;

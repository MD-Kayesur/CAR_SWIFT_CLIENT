 
import { useEffect, useState } from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa6";
import SingleConstom from "./SingleConstom";
const CostomerExparience = () => {

const [datas,setDatas] = useState([])
useEffect(()=>{
    fetch('../../../public/Costomers.json')
    .then(res=>res.json())
    .then(data=>{
        setDatas(data)
    })
},[])

    return (
          <marquee    scrollamount="20" behavior="scroll" direction="left">
        <div className="flex   gap-10">
            {
                datas.map(data =>  <SingleConstom data={data}></SingleConstom >)
                
            }
        </div>
            </marquee>
    );
};

export default CostomerExparience;
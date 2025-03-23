import { useParams } from "react-router-dom";

 
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import SingleDiscountDetail from "./SingleDiscountDetail";

const Discountetails = () => {

const patams = useParams()
 
console.log(patams)

 
const [discounts,setdiscounts] = useState([])
console.log(discounts);

console.log(discounts)
useEffect(()=>{
    fetch('../../../public/DiscountCars.json')
    .then(res=>res.json())
    .then(data=>{
        setdiscounts(data)
    })
},[])


console.log(patams)
    return (
        <div>
           
           {
            discounts.map(item => item?.id == patams?.id  ? <>
            <SingleDiscountDetail item={item}></SingleDiscountDetail>
            </> : <></>)
           }
        </div>
    );
};

export default Discountetails;
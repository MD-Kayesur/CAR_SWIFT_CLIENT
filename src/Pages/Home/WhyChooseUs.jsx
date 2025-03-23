import { useEffect, useState } from "react";

 

const WhyChooseUs = () => {

const [data,setData] = useState([])
useEffect(()=>{
    fetch('../../../public/WhyChooseUs.json')
    .then(res=>res.json())
    .then(data=>{
        setData(data)
    })
},[])

    return (
        <div>
            this is choosen 
        </div>
    );
};

export default WhyChooseUs;
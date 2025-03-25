import { useEffect, useState } from "react";

 import img2 from '../../Images/car_imgs/car9.jpg'

const WhyChooseUs = () => {

const [datas,setDatas] = useState([])
useEffect(()=>{
    fetch('../../../public/WhyChooseUs.json')
    .then(res=>res.json())
    .then(data=>{
        setDatas(data)
    })
},[])

    return (
        <div className="  md:flex md:flex-row-reverse gap-8">
           <div className="text-right"> <h1 className="text-2xl ">WHY CHOOSE US?</h1>
           <img className="mt-11 md:h-[300px] w-full rounded-2xl" src={img2} alt="" />
           </div>

         <div className="grid gap-10 grid-cols-2">
         {
            datas.map(data=> <div className="p-6  mt-3 bg-white rounded-lg shadow-md  bg-gradient-to-r from-orange-500 to-purple-500 text-white">
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
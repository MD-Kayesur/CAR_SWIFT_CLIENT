import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleCarDetail from "./SingleCarDetail";

const CarDetails = () => {
const params = useParams()

    const [allcars,setallcars] = useState([])
    console.log(allcars)
    useEffect(()=>{
        fetch('../../../public/AllCars.json')
        .then(res=>res.json())
        .then(data=>{
            setallcars(data)
        })
    },[])
    return (
        <div>
           
            {
                allcars.map(car=> car.id == params.id ? <> 
                
                <SingleCarDetail car={car}></SingleCarDetail>
                
                </> : <></>)
            }
        </div>
    );
};

export default CarDetails;
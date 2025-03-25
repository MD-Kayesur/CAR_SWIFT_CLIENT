import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleCarDetail from "./SingleCarDetail";
import useAxious from "../../../../Hooks/useAxious";
import { useQuery } from "@tanstack/react-query";

const CarDetails = () => {
const params = useParams()

    const [allcars,setallcars] = useState([])
    console.log(allcars)



    const AxiousURL = useAxious();
  const { refetch, data: CarDetails = [] } = useQuery({
    queryKey: ["CarDetails"],
    queryFn: async () => {
      const result = await AxiousURL.get("/MyCars");
      return refetch, result.data;
    },
  });
    // useEffect(()=>{
    //     fetch('../../../public/AllCars.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setallcars(data)
    //     })
    // },[])
    return (
        <div>
           
            {
                CarDetails.map(car=> car._id == params.id ? <> 
                
                <SingleCarDetail car={car}></SingleCarDetail>
                
                </> : <></>)
            }
        </div>
    );
};

export default CarDetails;
import axios from "axios";

 
 export const AxiousURL = axios.create({
    baseURL:'https://car-swift-server.vercel.app',
    timeout:5000
})
const useAxious = () => {
    return  AxiousURL
};

export default useAxious;
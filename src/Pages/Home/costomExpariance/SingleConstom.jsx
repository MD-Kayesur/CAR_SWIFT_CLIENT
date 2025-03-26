import { FaQuoteRight, FaStar } from "react-icons/fa6";
import useMovementHook from "../../../Hooks/useMovementHook";

 

const SingleConstom = ({data}) => {

    const [ref, isVisible] = useMovementHook();
    return (
        <div ref={ref}  className={`bg-white card-body    p-8 rounded-2xl shadow-lg   border    bg-gradient-to-r from-orange-500 to-purple-500  ${isVisible ? "movement" : ""} ` }>
            <div className="bg-gray-100 p-8 rounded-2xl shadow-lg ">
                        {/* Rating Section */}
                        <div className="flex mb-4">
                      {[...Array(data?.rating)].map((_, index) => (
                        <FaStar key={index} className="text-yellow-400" />
                      ))}
                    </div>
              
                    {/* Review Text */}
                   <div className=" ">
                   <p className="text-gray-600     mb-6">{data?.review}</p>
                   </div>
              
                    {/* User Section */}
                    <div className="flex items-center   gap-6">
                      <div className="flex items-center gap-4">
                        <img
                          src={data?.user?.profile_image}
                          alt={data?.user?.name}
                          className="w-14 h-14 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-bold text-lg">{data?.user?.name}</h4>
                          <p className="text-gray-500">{data?.user?.platform}</p>
                        </div>
                      </div>
                      
                      {/* Quote Icon */}
                      <FaQuoteRight className={`${data?.quote_icon_color} text-3xl`} />
                    </div>
            </div>
                  </div>)

 
};

export default SingleConstom
import { NavLink } from "react-router-dom";
import useMovementHook from "../../../../Hooks/useMovementHook";

 

const SingleDiscountDetail = ({item}) => {
    const [ref, isVisible] = useMovementHook();
    return (
        <>
        <div ref={ref}  className={`hero bg-base-200 min-h-screen ${isVisible ? "movement" : ""}`}>
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={item.img}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold"> title {item.title}!</h1>
      <p className="py-6">
      {item.description}
      </p>
      <NavLink  to='/availablecars' className="btn btn-primary">  Available Cars</NavLink>
    </div>
  </div>
    <div className='text-right absolute right-10 md:right-20 bottom-20  my-4'>
    <NavLink  to='/alldiscountscars' className="btn   btn-primary">   all Discount Cars  </NavLink>
    </div>
</div>
        </>
    );
};

export default SingleDiscountDetail;
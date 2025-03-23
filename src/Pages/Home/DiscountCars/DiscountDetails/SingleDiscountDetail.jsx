import { NavLink } from "react-router-dom";

 

const SingleDiscountDetail = ({item}) => {
    
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold"> title {item.title}!</h1>
      <p className="py-6">
      {item.description}
      </p>
      <NavLink  to='/availablecars' className="btn btn-primary"> Now Go to Available Cars</NavLink>
    </div>
  </div>
</div>
    );
};

export default SingleDiscountDetail;
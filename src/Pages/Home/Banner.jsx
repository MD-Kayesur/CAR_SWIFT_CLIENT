 import { useNavigate } from 'react-router-dom';
import img1 from '../../Images/cars_banner/banner5.jpg'
 
import useMovementHook from '../../Hooks/useMovementHook';
const Banner = () => {
const Navigate = useNavigate()
const handleClick =()=>{
    Navigate('/availablecars')
}

const [ref, isVisible] = useMovementHook();
  


    return (
        <div
        className="hero  min-h-screen"
        style={{
            backgroundImage: `url(${img1})`,
        }}>
        <div className="hero-overlay backdrop-blur-sm bg-white/10"></div>
        <div className="  hero-content  text-neutral-content  text-center">
          <div ref={ref} className={`${isVisible ? "movement" : ""}`}>
            <h1 className="mb-5 banner text-4xl font-bold">"Drive Your Dreams Today!" or "Your Next Car Awaits You."</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button onClick={handleClick} className="btn btn-primary">View Available Cars</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;
import React from 'react';
import useAxious from '../../Hooks/useAxious';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useMovementHook from '../../Hooks/useMovementHook';

const AddCar = () => {
    const Navigate = useNavigate()
    const AxiousURL = useAxious()

    const handleSubmit= (e)=>{
        e.preventDefault()
        const form = e.target
        const Car_Model = form.Car_Model.value
        const Daily_Rental_Price = form.Daily_Rental_Price.value
         const Availability = form.Availability.value;
        const Vehicle_Registration_Number = form.Vehicle_Registration_Number.value
        const Image_url = form.Image_url.value
        const Features = form.Features.value
        const bookingCount = form.bookingCount.value
        const Location = form.Location.value
       console.log(typeof(Availability))
         const info =  { Car_Model,Daily_Rental_Price,Availability,Vehicle_Registration_Number,Image_url,Features,bookingCount,Location}
        //  console.log(info);
         AxiousURL.post('/MyCars',info) 
         .then(res=>{
            console.log(res.data)
          if (res.data.insertedId) {
           Swal.fire({
                   title: " successly added your indestry details!",
                   icon: "success",
                   draggable: true,
                 });
            Navigate('/mycars')
            return ''
            
          }
         })


        //  AxiousURL.post('/AllCars',info)
        //  .then(( )=>{
        // //     console.log(res.data)
        // //   if (res.data.insertedId) {
        // //    Swal.fire({
        // //            title: " successly added your indestry details!",
        // //            icon: "success",
        // //            draggable: true,
        // //          });
          
        // //     return ''
            
        // //   }
        //  })
      
         
      }


// Car_Model
// Daily_Rental_Price
// Availability
// Vehicle_Registration_Number
// Features (e.g., GPS, AC, etc.)
// Description
// bookingCount(default 0)
// Image_url 
// Location

const [ref, isVisible] = useMovementHook();
    return (
        <div> 
 
<div ref={ref}  className=  {`bg-base-200  my-6 ${isVisible ? "movement" : ""}`} >
   <h2 className="text-2xl py-3 m-4"> Provide your Cars details</h2>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold"> If You Want You Can Add A Car !</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <form onSubmit={handleSubmit} action="">
      <fieldset className="fieldset">
          <label className="fieldset-label">Car_Model</label>
          <input type="text"  name="Car_Model" className="input" placeholder="Car_Model" />

          <label className="fieldset-label"> Daily_Rental_Price</label>
          <input type="text" name="Daily_Rental_Price" className="input" placeholder=" Daily_Rental_Price" />

          <label className="fieldset-label"> Availability</label>
          <input type="text" name="Availability" className="input" placeholder=" true or false" />

          <label className="fieldset-label">Vehicle_Registration_Number</label>
          <input type="number" name="Vehicle_Registration_Number" className="input" placeholder="Vehicle_Registration_Number" />

          <label className="fieldset-label">Image_url</label>
          <input type="url"  name="Image_url" className="input" placeholder="Image_url" />

          <label className="fieldset-label">Features (e.g., GPS, AC, etc.)</label>
          <input type="text"  name="Features" className="input" placeholder="Features (e.g., GPS, AC, etc.)" />

          <label className="fieldset-label">bookingCount</label>
          <input type="date"  name="bookingCount" className="input" placeholder="bookingCount" />

          <label className="fieldset-label">Location</label>
          <input type="text"  name="Location" className="input" placeholder="Location" />

 
          <  button  className="btn btn-neutral mt-4">  Add  A Car</  button>
        </fieldset>
      </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddCar;

import React from 'react';
import useAxious from '../../Hooks/useAxious';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddCar = () => {
    const Navigate = useNavigate()
    const AxiousURL = useAxious()

    const handleSubmit= (e)=>{
        e.preventDefault()
        const form = e.target
        const location = form.location.value
        const BlockName = form.BlockName.value
        const BuildingName = form.BuildingName.value
        const FloorNo = form.FloorNo.value
        const imgurl = form.imgurl.value
        const rent = form.rent.value
       
         const info =  {location,BlockName,BlockName,FloorNo,BuildingName,imgurl,rent}
        //  console.log(info);
         AxiousURL.post('/buildings',info)
         .then(res=>{
          if (res.data.insertedId) {
           Swal.fire({
                   title: " successly added your indestry details!",
                   icon: "success",
                   draggable: true,
                 });
            Navigate('/apartment')
            return ''
            
          }
         })
      
         
      }




    return (
        <div> 
 
<div className="  bg-base-200  my-6 ">
   <h2 className="text-2xl py-3 m-4"> Provide your apperment details</h2>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">save your Indestry details !</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <form onSubmit={handleSubmit} action="">
      <fieldset className="fieldset">
          <label className="fieldset-label">Location</label>
          <input type="text"  name="location" className="input" placeholder="location" />

          <label className="fieldset-label"> Block Name</label>
          <input type="text" name="BlockName" className="input" placeholder=" Block Name" />

          <label className="fieldset-label"> Building Name</label>
          <input type="text" name="BuildingName" className="input" placeholder=" Building Name" />

          <label className="fieldset-label">Floor No</label>
          <input type="number" name="FloorNo" className="input" placeholder="Floor No" />

          <label className="fieldset-label"> Img URL</label>
          <input type="url"  name="imgurl" className="input" placeholder=" Img URL" />

          <label className="fieldset-label">Rent</label>
          <input type="number"  name="rent" className="input" placeholder="Rent" />

 
          <  button  className="btn btn-neutral mt-4">  Add  A Appertment</  button>
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

import React from 'react';
import useAxious from '../../Hooks/useAxious';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';

const UpdateCars = () => {
  const navigate = useNavigate();
  const axiosURL = useAxious();
  const { id } = useParams();

  const { data: carCollection = [] } = useQuery({
    queryKey: ['CarCollection'],
    queryFn: async () => {
      const result = await axiosURL.get('/MyCars');
      return result.data;
    },
  });

  const singleData = carCollection?.find((data) => data?._id === id) || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedData = {
      Car_Model: form.Car_Model.value,
      Daily_Rental_Price: form.Daily_Rental_Price.value,
      Availability: form.Availability.value,
      Vehicle_Registration_Number: form.Vehicle_Registration_Number.value,
      Image_url: form.Image_url.value,
      Features: form.Features.value,
      bookingCount: parseInt(form.bookingCount.value),
      Location: form.Location.value,
    };

    axiosURL
      .put(`/MyCars/${id}`, updatedData)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: 'Successfully updated car details!',
            icon: 'success',
          });
          navigate('/mycars');
        }
      });
  };

  return (
    <div className="bg-base-200 my-6">
      <h2 className="text-2xl py-3 m-4">Update Your Car Details</h2>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Update Your Car Data!</h1>
          <p className="py-6">Modify your car details using the form below.</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <label>Car Model</label>
              <input type="text" name="Car_Model" className="input" defaultValue={singleData?.Car_Model} />

              <label>Daily Rental Price</label>
              <input type="number" name="Daily_Rental_Price" className="input" defaultValue={singleData?.Daily_Rental_Price} />

              <label>Availability (true/false)</label>
              <input type="text" name="Availability" className="input" defaultValue={singleData?.Availability} />

              <label>Vehicle Registration Number</label>
              <input type="text" name="Vehicle_Registration_Number" className="input" defaultValue={singleData?.Vehicle_Registration_Number} />

              <label>Image URL</label>
              <input type="url" name="Image_url" className="input" defaultValue={singleData?.Image_url} />

              <label>Features (GPS, AC, etc.)</label>
              <input type="text" name="Features" className="input" defaultValue={singleData?.Features} />

              <label>Booking Count</label>
              <input type="number" name="bookingCount" className="input" defaultValue={singleData?.bookingCount} />

              <label>Location</label>
              <input type="text" name="Location" className="input" defaultValue={singleData?.Location} />

              <button className="btn btn-neutral mt-4">Update Car</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCars;

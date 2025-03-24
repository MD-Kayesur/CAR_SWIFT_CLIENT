import React from "react";
import Banner from "./Banner";
import WhyChooseUs from "./WhyChooseUs";
import Header from "../../Components/Header";
import CarsCollections from "./CarsCollection/CarsCollections";
import DiscountCars from "./DiscountCars/DiscountCars";
import RentingMode from "./RentingMode";
import RidersBanner from "./RidersBanner";
import CostomerExparience from "./costomExpariance/CostomerExparience";
import AskedQuestion from "./AskedQuaision";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Banner></Banner>
      <Header title={"Browse Our Car Collection  "}> </Header>
      <CarsCollections></CarsCollections>
      <Header title={" Now Running Special  Discount for you  "}> </Header>
<DiscountCars></DiscountCars> 
      <Header title={" More than just a rental – A better experience "}>
        {" "}
      </Header> 
      <WhyChooseUs></WhyChooseUs>

      <Header title={" Renting Made Easy  "}> </Header>
      <RentingMode></RentingMode>
      <RidersBanner></RidersBanner>
      <Header title={" Customer Experiences That Speak for Themselves "}></Header>
      <CostomerExparience></CostomerExparience>
      <Header title={" Frequently Asked Questions"}></Header>
      <AskedQuestion></AskedQuestion>
    </div>
  );
};

export default Home;

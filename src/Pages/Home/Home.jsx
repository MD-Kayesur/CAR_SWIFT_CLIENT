import React from "react";
import Banner from "./Banner";
import WhyChooseUs from "./WhyChooseUs";
import Header from "../../Components/Header";
import CarsCollections from "./CarsCollection/CarsCollections";
import DiscountCars from "./DiscountCars/DiscountCars";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Banner></Banner>
      <Header title={"Browse Our Car Collection  "}> </Header>
      <CarsCollections></CarsCollections>
      <Header title={" Now Running Speacel Discount for you  "}> </Header>
<DiscountCars></DiscountCars>
      <Header title={" More than just a rental – A better experience "}>
        {" "}
      </Header>

      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;

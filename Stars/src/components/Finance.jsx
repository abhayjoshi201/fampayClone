import React from "react";
import { SectionWrapper } from "../hoc";
import image from "../components/track-img.png";

const Finance = () => {
  return (

    <div className="container">
      <h1 className="main-heading">Keep Your <span>CASHFLOW</span>  Crystal Clear </h1>
      <div className="expense_container">
        <div className="col-6 col-md-6 expense_left">
        <p>Take charge of your finances with our budget planner. Our free budget tracker helps you understand your spending for a brighter financial future.
        </p>
        <a href="http://localhost:3000/"><button className="primary-btn">Explore</button></a>
        </div>
      
        <div className="col-6 col-md-6 expense_right">
          <img src={image}  className="finance-tracker-img" alt="finance-tracker" />
        </div>

        

      </div>
    </div>
  )
};

export default SectionWrapper(Finance, "");

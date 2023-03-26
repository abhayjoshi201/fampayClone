import React from "react";
import { SectionWrapper } from "../hoc";
import image from "../components/forum.png";

const Finance = () => {
  return (

    <div className="container">
      <h1 className="main-heading">Ask Question <span>OR</span>   Answer them </h1>
      <div className="finance_container">
        <div className="col-6 col-md-6 finance_left">
        
        <img src={image}  className="finance-tracker-img" alt="finance-tracker" />
        </div>
      
        <div className="col-6 col-md-6 finance_right">
        <p>Ever Wondered how others are managing their Finance, take a time and see what others are doing, ask your queries or answer 
            questions
        </p>
        <a href="https://fampay.000webhostapp.com/index.php"> <button className="primary-btn"><b>Chat</b></button></a>
        </div>

        

      </div>
    </div>
  )
};

export default SectionWrapper(Finance, "");

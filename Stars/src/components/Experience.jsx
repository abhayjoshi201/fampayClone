import React from "react"
import image from "../components/fam.jpeg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col">
              <img src={image}  className="footer-img" alt="logo" />
              <br />
              <p>India's first UPI and card payments for teenagers is here! Introducing the best prepaid card and UPI app for teenagers (13-19-year-olds). FamPay helps teens to make payments, online and offline through the FamCard & UPI ID, exclusively for teenagers.</p>
        </div>

        <div className="col">
            <h3>Office <div className="underline"><span></span></div></h3>
             <p>ITBP road</p>
            <p>roorke</p>
            <p>uttarakhand India</p>
            <p className="email-id">sample@gmail.com</p>
            <h4>xxxxxxxxxx</h4>
        </div>

        <div className="col">
        <h3>Links <div className="underline"><span></span></div></h3>
        <ul>
            <li><a href="">Home</a></li>
            
            <li><a href="">Contact us</a></li>
            
            <li><a href="">Explore</a></li>
            
        </ul>
        </div>
        <div className="col">
            <h3>Click on the mail icon to subscribe to our NewsLetter</h3>
            <div className="social-icons">

                <a href="https://www.facebook.com/fampay.in/"><i className="fab fa-facebook-f"></i></a>
                <a href="https://github.com/fampay"><i className="fab fa-github"></i></a>
                <a href="https://www.instagram.com/fampay.in/"><i className="fab fa-instagram"></i></a>
                <a href="http://localhost:3306/"><i class="fa-2x fa-solid fa-envelope ylw-icon"></i></a>
                <a href="https://negiadarsh.github.io/simon/"><i class="fa-2x fa-solid fa-gamepad game"></i></a>
            </div>
        </div>
      </div>
      <p className="copyright">All Right Reserved   ©  2023</p>
    </div>
  )
}
export default Footer
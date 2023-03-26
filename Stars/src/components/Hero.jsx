import { motion } from "framer-motion";
import image from "../components/main.png";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

// icons
// import { FaHeart } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero_container">
      <div className="hero_left">
        <h2>The Next <span>Generation</span> Payment Method.</h2>
        <p>Our platform let's you make <span>Easy, Fast, Secure,</span> payments.</p>
        <div className="appDownload">
        <a href=" https://play.google.com/store/apps/details?id=com.fampay.in&hl=en_IN&gl=US"><button type="button" class="btn btn-dark btn-lg download-button"><i class="fa-brands fa-2x fa-apple"></i> Download</button></a>
      <a href=" https://play.google.com/store/apps/details?id=com.fampay.in&hl=en_IN&gl=US"><button type="button" class="btn btn-outline-light btn-lg download-button"><i class="fa-brands fa-2x fa-google-play"></i> Download</button></a>
        </div>
      </div>

      <div className="hero_right">
        <img src={image}  className="finance-tracker-img" alt="finance-tracker" />
      </div>

    </div>

  );
};

export default Hero;

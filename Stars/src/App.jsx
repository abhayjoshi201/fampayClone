import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from "./components";
import Finance from "./components/Finance";
import Finance2 from "./components/Finance2";
import Rewards from "./components/Rewards"

const App = () => {
  return (
    <BrowserRouter>

    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center navbar-div'>
          <Navbar />
        
    </div>
      
       <div className='relative z-0 bg-primary'>
        <Hero/>
        <About/>
        <Finance/>

        <Rewards/>
        <Finance2/>
        <Works/>
        
        <Tech/>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Experience/>
        
      </div>
   
      
    </BrowserRouter>
  );
}

export default App;

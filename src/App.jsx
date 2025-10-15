// import React from "react";
// // import { Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Hero from './Components/Hero';
// import AboutUs from './Components/AboutUs';
// import Services from "./Components/Services";
// import Footer from "./Components/Footer";
// import Contact from "./Components/ContactUs";


// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <AboutUs />
//       <Services />
//       <Contact />
//       <Footer />
//     </>
//   );
// };
// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ACRepair from './Components/ServicePages/ACRepair';

import GeyserRepair from './Components/ServicePages/GeyserRepair';
import WashingMachineRepair from './Components/ServicePages/WashingMachineRepair';
import RORepair from './Components/ServicePages/RORepair';
import FridgeRepair from './Components/ServicePages/FridgeRepair';
import CCTVRepair from './Components/ServicePages/CCTVRepair';
import MicrowaveRepair from './Components/ServicePages/MicrowaveRepair';
import ChimneyRepair from './Components/ServicePages/ChimneyRepair';
import GPSTrackerRepair from "./Components/ServicePages/GPSTrackerRepair";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Contact from "./Components/ContactUs";
import Hero from './Components/Hero';
import Home from "./Components/Home";
import PrivacyPolicyPage from "./Components/PrivacyPolicyPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="font-serif">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/service/ac" element={<ACRepair />} />
          <Route path="/service/geyser" element={<GeyserRepair />} />
          <Route path="/service/washing-machine" element={<WashingMachineRepair />} />
          <Route path="/service/ro" element={<RORepair />} />
          <Route path="/service/fridge" element={<FridgeRepair />} />
          <Route path="/service/cctv" element={<CCTVRepair />} />
          <Route path="/service/microwave" element={<MicrowaveRepair />} />
          <Route path="/service/chimney" element={<ChimneyRepair />} />
          <Route path="/service/gps" element={<GPSTrackerRepair />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default App;

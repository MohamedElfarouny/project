// import * as React from "react";
import Home from "./componant/Home";
import Navigation from "./componant/Navigation";
import { Route, Routes } from "react-router-dom";
import Sign from "./componant/Sign";
import About from "./componant/About";
import Services from "./componant/Services";
import Booking from "./componant/Booking";
import Api from "./componant/Api";
const App = () => {
  return (
  
      <div>
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="Sign" element={<Sign/>} />
          <Route path="About" element={<About/>} />
          <Route path="Services" element={<Services/>} />
          <Route path="Booking" element={<Booking/>} />
          <Route path="Api" element={<Api/>} />

        </Routes>
      </div>
  );
};
export default App;

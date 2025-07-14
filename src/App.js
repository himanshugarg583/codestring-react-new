import "./App.css";
import {Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/common/Navbar"

import About from "./pages/About";
import Contact from "./pages/Contact";

import Error from "./pages/Error"

function App() {

 


  return (
   <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
    
   

   

    <Route
          path="/about"
          element={
            
              <About />
            
          }
        />
    <Route path="/contact" element={<Contact />} />

   

    
     

   
     



    <Route path="*" element={<Error />} />


    </Routes>

   </div>
  );
}

export default App;

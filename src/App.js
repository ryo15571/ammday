// pages
import A from "./Pages/A/A"
import M from "./Pages/M/M";
import R from "./Pages/R/R";



//detail



import { Route, Routes } from "react-router-dom"
import React from "react";

//component
import Navbar from "./Navbar/navbar";
import Footer from "./Footer/footer";
import Home from "./Pages/Home/home";






function App() {
  const MENU = [
    {
      name: "Home",
      path: "/",
      element: <Home />,
      title: "Hommy",
     
    },
    {
      name: "A",
      path: "/A",
      element: <A />,
      title: "A",
      
    },

    {
      name: "M",
      path: "/M",
      element: <M />,
      title: "M",
      
    },
    {
      name: "R",
      path: "/R",
      element: <R />,
      title: "R",
    },
   
    
   
  ];
  return (
    <div className="page-container" >
    <div className="content-wrap">

    </div>
    <div>
      <Navbar MENU={MENU} />
      <Routes>
        {/* <Route  path="/Banner" element={<BannerMain />} />
        <Route path="/videos" element={<VideoMain/>}/> */}
        {MENU?.map((page, index) => {
          return (
            <Route
              key={`key-of-route-${index}`}
              path={page.path}
              element={page.element}
            />
          );
        })}
      </Routes>
      </div>
      <Footer /> 
    </div>
  );
}

export default App;
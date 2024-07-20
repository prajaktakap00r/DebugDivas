import React, { useState } from "react";
import Navbar from "./Navbar";
import AddDesign from "./AddDesign";
import Designs from "./Designs";
import { DesignProvider } from "../Context/DesignProvider";

const Home = () => {
  const [showComponent, setShowComponent] = useState("designs");

  const showAddDesign = () => {
    setShowComponent("addDesign");
  };

  const showDesigns = () => {
    setShowComponent("designs");
  };

  return (
    <DesignProvider>
      <div className="home">
        <Navbar showAddDesign={showAddDesign} showDesigns={showDesigns} />
        <div className="container">
          {showComponent === "designs" && <Designs />}
          {showComponent === "addDesign" && <AddDesign />}
        </div>
      </div>
    </DesignProvider>
  );
};

export default Home;

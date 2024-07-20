import React, { useContext } from "react";
import { DesignContext } from "../Context/DesignProvider";

const Designs = () => {
  const { designs } = useContext(DesignContext);

  return (
    <div className="designs-container" id="designs">
      {designs.length === 0 ? (
        <h1 className="designs-title">No Designs Yet...</h1>
      ) : (
        <div className="designs-grid">
          {designs.map((design) => (
            <div key={design.id} className="design-item">
              <img
                src={design.img}
                alt={design.title}
                className="design-image"
              />
              <h2 className="design-title">{design.title}</h2>
              <hr />
              <p className="design-details">
                Uploaded by: <span>{design.name}</span>
              </p>
              <p className="design-details">
                Email Id: <span>{design.email}</span>
              </p>
              <p className="design-details">
                Price Range: <span>{design.priceRange}</span>
              </p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Designs;

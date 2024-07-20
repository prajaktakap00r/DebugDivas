import React, { useState, useContext } from "react";
import { DesignContext } from "../Context/DesignProvider";
import { useNavigate } from "react-router-dom";

const AddDesign = () => {
  const { addDesign } = useContext(DesignContext);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onloadend = () => {
      const newDesign = {
        id: Date.now(),
        title,
        name,
        email,
        priceRange,
        img: reader.result,
      };
      addDesign(newDesign);

      setTitle("");
      setName("");
      setEmail("");
      setPriceRange("");
      setImage(null);

      navigate("/customization");
    };
    if (image) {
      reader.readAsDataURL(image);
    }
  };

  return (
    <div id="add-design" className="add-design">
      <h2>Add Design</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price Range</label>
          <input
            type="text"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddDesign;

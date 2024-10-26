import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import car1 from "./assets/car.jpg";
import logo1 from "./assets/logo.png";
import { SlOptions } from "react-icons/sl";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import "./index.css";

function Post() {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-user-detail">
          <img src={logo1} alt="logo" className="dp" id="my-id" />
          <div>
            <h3>Muhammad Ahmed</h3>
            <span>3 hours ago</span>
          </div>
        </div>
        <SlOptions />
      </div>

      <p>
        The Mercedes-AMG GT4 is based on the powerful Mercedes-AMG GT R Coupé
        production sports car (combined fuel consumption: 13.1 l/100 km |
        combined CO2 emission: 299 g/km) and stands out for an unparalleled
        safety equipment as well as its weight-optimised design. Its structure
        with a very light-weight and extremely rigid aluminium space frame
        contributes to highest achievements at the race track.
      </p>
      <img src={car1} alt="post image" className="post-photo" id="my-id" />

      <div id="icons">
        <AiOutlineLike id="like"/> <span>like</span> 
        <BiCommentDetail id="comment"/> <span>comment</span> 
        <IoMdShareAlt id="share"/> <span>share</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

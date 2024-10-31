import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import car1 from "./assets/car.jpg";
import bmw from "./assets/bmw.avif";
import ferrari from "./assets/ferrari.jpg";
import rolls from "./assets/rolls.jpg";
import mustang from "./assets/mustang.jpg";
import audi from "./assets/audi.webp";
import porsche from "./assets/porsche.avif";
import ford from "./assets/ford.avif";
import lambo from "./assets/lambo.webp";
import bugatti from "./assets/bugatti.webp";
import logo1 from "./assets/logo.png";
import bugatti_logo from "./assets/bugatti-logo.png";
import bmw_logo from "./assets/bmw-logo.png";
import audi_logo from "./assets/audi-logo.jpg";
import mustang_logo from "./assets/mustang-logo.jpg";
import rolls_logo from "./assets/rolls-logo.jpg";
import ferrari_logo from "./assets/ferrari-logo.jpg";
import lambo_logo from "./assets/lambo-logo.jpg";
import porsche_logo from "./assets/porsche-logo.webp";
import ford_logo from "./assets/ford-logo.avif";
import { SlOptions } from "react-icons/sl";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import "./index.css";

function Post(Props) {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-user-detail">
          <img src={Props.logo} alt="logo" className="dp" id="my-id" />
          <div>
            <h3>{Props.name}</h3>
            <span>3 hours ago</span>
          </div>
        </div>
        <SlOptions />
      </div>

      <p>{Props.description}</p>
      {Props.postImage ? (
        <img
          src={Props.postImage}
          alt="post image"
          className="post-photo"
          id="my-id"
        />
      ) : null}

      <div id="icons">
        <AiOutlineLike id="like" /> <span>like</span>
        <BiCommentDetail id="comment" /> <span>comment</span>
        <IoMdShareAlt id="share" /> <span>share</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
      <Post
        name="Muhammad Ahmed"
        // postImage={car1}
        logo={logo1}
        description="The Mercedes-AMG GT4 is based on the powerful Mercedes-AMG GT R Coupé
        production sports car (combined fuel consumption: 13.1 l/100 km |
        combined CO2 emission: 299 g/km) and stands out for an unparalleled
        safety equipment as well as its weight-optimised design. Its structure
        with a very light-weight and extremely rigid aluminium space frame
        contributes to highest achievements at the race track."
      />
      <Post
        name="Zulfiqar Ali"
        postImage={bmw}
        logo={bmw_logo}
        description="The BMW 7 series model range has long-represented the embodiment of 
        ultimate comfort, authoritative presence and exceptional performance. Offering a 
        vast array of individual design options and far-reaching technical innovations, 
        it has earned its reputation as the supreme luxury sedan. The new BMW 7 series 
        epitomises this tradition and essentialises its evolution with a quantum leap in 
        terms of size and design."
      />
      <Post name="Muhammad Yasir" postImage={ferrari} logo={ferrari_logo} />
      <Post name="Muhammad Amir" postImage={audi} logo={audi_logo} />
      <Post
        name="Abdul Haseeb"
        postImage={bugatti}
        logo={bugatti_logo}
        description="It was a special milestone when the decision on the design of the 
        Tourbillon was made at a secret meeting at the beginning of 2022 – and the future 
        of the brand was thus shaped."
      />
      <Post name="Muhammad Ashraf" postImage={lambo} logo={lambo_logo} />
      <Post name="Abdul Hadi" postImage={porsche} logo={porsche_logo} />
      <Post
        name="Muhammad Sufiyan"
        postImage={rolls}
        logo={rolls_logo}
        description="Phantom makes its arrival known through bold and original statements. 
        Sublime features are underpinned by meticulous craft and engineering, resulting in 
        an authoritative presence that demands both awe and attention."
      />
      <Post name="Muhammad Saleem" postImage={ford} logo={ford_logo} />
      <Post
        name="Muhammad Kamran"
        // postImage={mustang}
        logo={mustang_logo}
        description="Leaping over the barrier of what's never been done before, 
        Ford's Mustang Raptor is all-new, though it's certainly lived as a fantasy 
        in the hearts of pony-car (and likely Raptor) fans for a long time. 
        Full details have yet to be revealed but expect more information as we crawl 
        closer to the Mustang Raptor's launch date, which is expected sometime in 2026."
      />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

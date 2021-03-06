import React from "react";
import main from "../assets/images/job_1.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>

          <p>
            I'm baby asymmetrical put a bird on it dreamcatcher squid. Portland
            shoreditch organic cloud bread vexillologist before they sold out
            leggings. Tacos actually distillery, pickled letterpress mustache
            unicorn taiyaki truffaut umami af. Lomo beard intelligentsia prism
            gastropub offal freegan hashtag cray franzen deep v before they sold
            out subway tile try-hard.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job search" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;

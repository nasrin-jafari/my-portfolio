import React from "react";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import {CTA } from "../../components"
const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hi ,
          I'm Nasrin 
          <br />
          Front end developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        start={{
          transform: "translateY(500px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <CTA />
      </Animate>
    </section>
  );
};
export default Home;

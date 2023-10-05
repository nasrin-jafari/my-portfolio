import React from 'react';
import { BsPatchCheckFill } from "react-icons/bs";
import "./styles.scss"
import { skillsData } from '../../data/data';
import { PageHeaderContent } from '../../components';
import { BsInfoCircleFill } from "react-icons/bs";

import { Animate } from "react-simple-animate";

const Skills = () => {
  return (
    <section id="experience">
      <PageHeaderContent
        headerText="What Skills I Have ? "
        icon={<BsInfoCircleFill size={40} />}
      />
      <Animate
        play
        duration={1.5}
        start={{
          transform: "translateX(500px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              {skillsData.map((skill) => (
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{skill.name}</h4>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Skills;
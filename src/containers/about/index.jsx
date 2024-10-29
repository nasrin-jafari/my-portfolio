import "./styles.scss";
import { FaReact } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import { BsFiletypeHtml } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { Animate } from "react-simple-animate";
import { MdLocalLibrary } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { resumeData } from "../../data/data";
const jobSummary =
  "Hi i'm nasrin, 26 years old, and I am Front-end developer with 2 years of experience";
const About = () => {
  return (
    <div className="about">
      <div className="timeline__education">
        <h3 className="about-title timeline__education__header-text">
          about me
        </h3>
        <p className="about-detail">{jobSummary}</p>
        <h3 className="timeline__education__header-text">Experience</h3>
        <VerticalTimeline
          layout={"1-column"}
          lineColor="var(--theme-main-color)"
        >
          {resumeData.map((item) => (
            <VerticalTimelineElement
              key={item.title}
              className="timeline__education__vertical-timeline-element"
              contentStyle={{
                background: "none",
                color: "var(--theme-sub-text-color)",
                border: "1.5px solid var(--theme-main-color)",
                borderRadius: "16px",
              }}
              date={item.date}
              icon={<MdLocalLibrary />}
              iconStyle={{
                background: "#181818",
                color: "var(--theme-main-color)",
              }}
            >
              <div className="vertical-timeline-element-title-wrapper">
                <p className="text-detail">
                  {item.title} :
                  <br className="break" />
                  {item.subTitle}
                </p>
              </div>
              {/*<p className="vertical-timeline-element-title-wrapper-description">*/}
              {/*  {item.description}{" "}*/}
              {/*</p>*/}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <div className="about__content__servicesWrapper">
        <Animate
          play
          duration={1.5}
          delay={0}
          start={{
            transform: "translateX(600px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <IoLogoJavascript size={60} color="var( --theme-main-color)" />
            </div>
            <div>
              <FaReact size={60} color="var( --theme-main-color)" />
            </div>
            <div>
              <TbWorldCode size={60} color="var( --theme-main-color)" />
            </div>
            <div>
              <BsFiletypeHtml size={60} color="var( --theme-main-color)" />
            </div>
          </div>
        </Animate>
      </div>
    </div>
  );
};

export default About;

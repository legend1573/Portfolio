import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
// import { DiApple, DiAndroid } from "react-icons/di";
// import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Apeksha Porwal",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "Email",
    value: "porwalapeksha96@gmail.com"
  },
  {
    label: "Contact No",
    value: "+91 8769018941",
  },
];

const jobSummary =
  "Enthusiastic engineering persuing BTech degree currently with basic knowledge in coding and design. Hands on practice with the languages like C++, HTML , JavaScript, c and css. Also keen to learn and work on new softwares and technologies with the capability to work in teams by providing valuable support. As a fresher I am a Self motivated and hardworking seeking for an opportunity to work in a challenging environment and to prove my skills and utilize my knowledge & intelligence in the growth of the organization.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div >
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;

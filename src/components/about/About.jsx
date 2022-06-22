import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>2+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>4+ Completed</small>
            </article>
          </div>
          <p>
            Hi, I'm a self taught React Js developer who got all his knowledge
            from Udemy courses, YouTube tutorials to sites like
            freecodecamp.org, The Odin Project etc. <br /> Since I started out
            at my first company which was a startup at the time, I've gone
            through different roles beginning from Python development to Flutter
            and even doing SEO. <br />
            Finally over a year ago, We got a request from a client with a
            requirement for a React Js developer, and I was the one who was
            assigned for the job. I was asked if I could learn React Js and I
            said yes without a second thought.
            <br /> <br /> I wasn't really aware about the learning curve and how
            many hours of hardwork I had to put into it to get at least to a
            stage where I was just Okay. But once I got the hang of it, I was
            sure that I wouldn't do anything else anymore. My goal for the
            future is to become a Full Stack Developer, which I've currently put
            on hold to master React Js first.
            <br />
            <br /> Currently, I'm looking for a job as a Front-End Developer
            (React Js).
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

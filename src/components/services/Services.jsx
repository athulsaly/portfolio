import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="srevice__list-icon" />
              <p>Web design services.</p>
            </li>
            <li>
              <BiCheck className="srevice__list-icon" />
              <p>Mobile app UX and UI design services.</p>
            </li>
            <li>
              <BiCheck className="srevice__list-icon" />
              <p>Cross-platform experiences design.</p>
            </li>
            <li>
              <BiCheck className="srevice__list-icon" />
              <p>UI and UX consulting</p>
            </li>
            <li>
              <BiCheck className="srevice__list-icon" />
              <p>Planning</p>
            </li>
            <li>
              <BiCheck className="srevice__list-icon" />
              <p>Designing and Prototyping</p>
            </li>
          </ul>
        </article>
        {/*  END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="srevice__list-icon" />
              <p>Web Applications</p>
            </li>
            <li>
              <BiCheck className="srevice__list-icon" />
              <p>Websites</p>
            </li>
            <li>
              <BiCheck className="srevice__list-icon" />
              <p>Back-end development</p>
            </li>
            <li>
              <BiCheck className="srevice__list-icon" />
              <p>Integration</p>
            </li>
            <li>
              <BiCheck className="srevice__list-icon" />
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className="srevice__list-icon" />
              <p>Ecommerce</p>
            </li>
            <li>
              <BiCheck className="srevice__list-icon" />
              <p>Enterprise (corporate) web solutions</p>
            </li>
            <li>
              <BiCheck className="srevice__list-icon" />
              <p>Support and Maintenance</p>
            </li>
          </ul>
        </article>
        {/*    END OF WEB DEV */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="srevice__list-icon" />
              <p>Blog Posts</p>
            </li>
            <li>
              <BiCheck className="srevice__list-icon" />
              <p>Long-form content</p>
            </li>
            <li>
              <BiCheck className="srevice__list-icon" />
              <p>Online guides</p>
            </li>
            <li>
              <BiCheck className="srevice__list-icon" />
              <p>Infographics</p>
            </li>
            <li>
              <BiCheck className="srevice__list-icon" />
              <p>Micrographics</p>
            </li>
            <li>
              <BiCheck className="srevice__list-icon" />
              <p>Videos</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;

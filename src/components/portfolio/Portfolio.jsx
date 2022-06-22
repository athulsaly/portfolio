import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Scriptzo",
    github: "https://github.com/athulsaly/scriptzo",
    demo: "https://www.scriptzo.in",
  },
  {
    id: 2,
    image: IMG2,
    title: "HomeCook App",
    github: null,
    demo: "https://homecookapp.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Bookings Calendar",
    github: "https://github.com/athulsaly/calendar-final/",
    demo: null,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="scriptzo" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  style={{ display: github === null ? "none" : "" }}
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  style={{ display: demo === null ? "none" : "" }}
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

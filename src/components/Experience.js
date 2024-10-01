import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease",
      once: false,
    });
  }, []);
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div
            className="timeline-content"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h3>2023 - current</h3>
            <h5 className="mb-3 text-dark">Full Stack Developer at Slushy</h5>
            <p>
              Collaborating with team of 5 to deliver end-to-end solutions
              within startup environment. Implemented improvements and resolved
              issues independently or with minimal guidance, using best
              practices for optimal application performance.
              <br />
              <i>
                NextJs, Tailwind, Zustand, Typescript, NestJs, DynamoDB, AWS
              </i>
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div
            className="timeline-content"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <h3>2021 - 2022</h3>
            <h5 className="mb-3 text-dark">Front End Developer at Toric</h5>
            <p>
              Engeneered reusable React components and conducted code
              refactoring, resulting in improved code efficiency and
              performance.
              <br />
              <i>React, Redux, Typescript, Material UI, Express.</i>
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div
            className="timeline-content"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h3>2021</h3>
            <h5 className="mb-3 text-dark">Internship, 2 months </h5>
            <p>
              Montreal, Canada
              <br />
              Creating and developing websites using
              <br />
              <i>MERN stack</i>
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div
            className="timeline-content"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <h3>2017-2019</h3>
            <h5 className="mb-3 text-dark">Freelancer, 2 years 4 months </h5>
            <p>
              Ukraine
              <br />
              Developing and maintaining websites using
              <br />
              HTML, CSS and JavaScript.
              <br />
              Troubleshooting website problems
            </p>
          </div>
        </div>

        {/* <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div
            className="timeline-content"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h3>2008-2018</h3>
            <h5 className="mb-2 text-dark">Service Technician, 10 years</h5>
            <p>
              Ukraine
              <br />
              Examination, testing and analysis of malfunctions
              <br />
              Providing assistance and service of equipment
              <br />
              Supervise employee's work
            </p>
          </div>
        </div> */}

        {/* <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div
            className="timeline-content"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <h3>2005-2008</h3>
            <h5 className="mb-2 text-dark">
              Process operator, 3 years 6 months
            </h5>
            <p>
              Ukraine
              <br />
              Japan Tobacco International,
              <br />
              Quality Control according to High Standards JTI Company
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Experience;

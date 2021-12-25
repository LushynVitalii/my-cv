import React, {useEffect} from "react";
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
        
      <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content" data-aos="fade-left"
              data-aos-delay="100">
            <h3>2021 - current</h3>
            <h5 className="mb-2 text-dark">Jr. Front End Developer </h5>
            <p>
              Montreal, Canada
              <br />
              Developing and maintaining an amaizing application using
              <br />
              HTML, CSS, React, Redux.
            </p>
          </div>
        </div>
              
          <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content" data-aos="fade-right"
              data-aos-delay="100">
            <h3>2021</h3>
            <h5 className="mb-2 text-dark">Internship, 2 months </h5>
            <p>
              Montreal, Canada
              <br />
              Creating and developing websites using
              <br />
             MERN stack
            </p>
          </div>
              </div>
              
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content" data-aos="fade-left"
              data-aos-delay="100">
            <h3>2017-2019</h3>
            <h5 className="mb-2 text-dark">Freelancer, 1 year 8 months </h5>
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

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content" data-aos="fade-right"
              data-aos-delay="100">
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
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content" data-aos="fade-left"
              data-aos-delay="100">
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
        </div>
      </div>
    </div>
  );
};

export default Experience;

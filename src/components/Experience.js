import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Experience</h1>
          </div>  
          <div className="container experience-wrapper">
              
          <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-2021</h3>
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
          <div className="timeline-content">
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
          <div className="timeline-content">
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
          <div className="timeline-content">
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

import React, { useEffect } from "react";
import Author from "../images/my-photo.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-cubic",
      delay: 100,
      once: false,
    });
  }, []);
  return (
    <div id="about" className="container py-2 mt-1">
      <div className="row">
        <div className="col-lg-6 col-xm-12 mt-5" data-aos="fade-right">
          <div  className="photo-wrap mb-5">
            <img className="profile-img" src={Author} alt="" />
          </div>
        </div>
        <div data-aos="fade-left" className="col-lg-6 col-xm-12 text-center">
          <h1 className="about-heading mb-5">about me</h1>
          <p id="about-me-parag" className="h5">
            My name is Vitalii Lushyn and I am a front-end developer who is
            motivated by challenges. Positive, energetic and eager to learn to
            accomplish the set goal. Able to bring my experience to your company
            where I can contribute to designing and developing successful
            software. With several years of experience working for an
            international company, I understand the importance of high
            standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

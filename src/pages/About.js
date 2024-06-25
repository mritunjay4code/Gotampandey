import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import imags from "../photo/om.jpg";
import imag from "../photo/good.jpg";

const About = () => {
  return (
    <div>
      <Header />
      <img className="w-full mt-16" src={imags} />
      <h1 className="text-4xl text-center">About</h1>
      <hr className="w-1/5 mx-auto " />

      <Footer />
    </div>
  );
};

export default About;

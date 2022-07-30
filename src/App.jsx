import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />
    </div>
  );
}



/* API link */
if ('geolocation' in navigator){
  console.log ('geolocation available');
  navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
  });
}else {
  console.log ('geolocation not available');
}

const sucessfulLookup = (position) =>{
  const {lattitude ,longitude}= position.coords;
  const self= this;
  fetch ('https://api.opencagedata.com/geocode/v1/json?q=${lattitude}+{longitude}&key=0e4d7d46374b4894a7d31af02107372d')
  .then (response = response.json())
  .then (console.log);
};         
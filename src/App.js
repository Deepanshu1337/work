import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";

import Img1 from "./assests/istockphoto-1632091356-2048x2048.jpg";
import Img2 from "./assests/istockphoto-1713107584-2048x2048.jpg";
import Img3 from "./assests/pocket-watch-1637396_1280.jpg";
import fr1 from "././assests/SH1.jpg";
import fr2 from "./assests/sh2.jpg";
import fr3 from "./assests/sh3.png";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";

function App() {
  const carouselItems = [
    {
      title: "First Slide",
      subtitle: "Some representative placeholder content for the first slide.",
      backgroundImage: Img1,
      foregroundImage: fr1,
    },
    {
      title: "Second Slide",
      subtitle: "Some representative placeholder content for the second slide.",
      backgroundImage: Img2,
      foregroundImage: fr2,
    },
    {
      title: "Third Slide",
      subtitle: "Some representative placeholder content for the third slide.",
      backgroundImage: Img3,
      foregroundImage: fr3,
    },
  ];

  return (
    <Swiper
      navigation={true}
      modules={[FreeMode, Navigation]}
      loop={true}
      className="mySwiper"
    >
      {carouselItems.map((item, index) => (
        <SwiperSlide key={index} className="slide-container">
        {/* Background Image */}
        <div
          className="background-image"
          style={{ backgroundImage: `url(${item.backgroundImage})` }}
        ></div>
      
        {/* Content Container */}
        <div className="content-container">
          <div className="content d-flex flex-column justify-content-center gap-2">
            <h1>{item.title}</h1>
            <p>{item.subtitle}</p>
            <button className="btn btn-primary text-white">
              <a href="#" className="text-white">View more</a>
            </button>
          </div>
          <div className="foreground-image">
            <img src={item.foregroundImage} alt={`${item.title} foreground`} />
          </div>
        </div>
      </SwiperSlide>
      
      ))}
    </Swiper>
  );
}

export default App;

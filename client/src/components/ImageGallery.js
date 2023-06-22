import React from "react";
import Slider from "react-slick";
import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";

import "./ImageGallery.css";

export default function ImageGallery() {
  const web1 = require("./assets/ani.png");
  const web2 = require("./assets/casual.png");
  const web3 = require("./assets/illust.png");
  const web4 = require("./assets/toon.png");
  // image 받아오기

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 100,
    slidesPerRow: 3,
  };
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/arts/all/").then((response) => {
      setImages(response.data.data);
    });
  }, []);
  return (
    <div className="image-gallery-container">
      <div className="prompt-explain">
        <span>작품 목록</span>
        <br></br>
        <span>AI가 그린 작품들을 감상해 보세요!</span>
      </div>
      <Slider {...settings}>
        {images.map((item) => {
          return (
            <div key={item.id} className="image-gallery-card-container">
              <div className="image-gallery-card">
                <img src={item.image_url}></img>
                <div className="image-gallery-card-text-container">
                  <h3> Title: {item.prompt}</h3>
                  <h3> Style: {item.style}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

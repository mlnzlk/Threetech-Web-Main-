import React, { Component } from "react";
import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "./ImageSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 슬라이드 오른쪽에 더보기 버튼 생성하기
// 그림목록들 커드 형태로 구성, 1*1 , 그림자 처리하기
export default function ImageSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    arrows: false,
  };

  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/arts/recent/").then((response) => {
      setImages(response.data.data);
    });
  }, []);
  console.log(images);
  return (
    <div>
      <div className="prompt-explain">
        <span>작품 목록</span>
        <br></br>
        <span>AI가 그린 작품들을 감상해 보세요!</span>
      </div>
      <div className="image-slider-container">
        <div className="image-more">
          <Slider {...settings}>
            {images.map((image) => {
              return (
                // image 나오는 부분들 , 박스 사이즈 조정 필요
                <div key={image.id} className="image-slider-content">
                  <div className="image-slider-card">
                    <img src={image.image_url}></img>
                    <h3>Title: {image.prompt} </h3>
                    <h3>Style: {image.style}</h3>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="click-button">
          <Link
            to={"/arts/all"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <button type="submit">
              <p>더보기</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./ImageList.css";

export default function ImageList() {
  return (
    <div className="image-list-container">
      <div className="image-list-title">작품 목록</div>
      <div className="image-list-content-gallery">
        {/* 만들어진 이미지들 갤러리 형식으로 보여주기 */}
      </div>
      <div className="image-list-content-list">
        {/* 만들어진 이미지를 리스트 형식으로 보여주기 */}
      </div>
    </div>
  );
}

import React from "react";
import "./TopNav.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TopNav() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    // 이미지 생성, 작품목록, contact us, 알고리즘

    // 들어가는 GNB
    <div className="nav-container">
      <div className="nav-title-box">
        <div className="nav-team-logo">
          {/* 로고 생성해서 들어갈 부분 div로 생성해둠 */}
          <Link
            to={"/"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <span>Three-tech</span>
          </Link>
        </div>
        <div className="nav-image-make">
          <Link
            to={"/"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <span>이미지 생성</span>
          </Link>
        </div>
        <div className="nav-image-list">
          <Link
            to={"/arts"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <span> 작품 목록 </span>
          </Link>
        </div>
        <div className="nav-alghrithm-page">
          {/* 일고리즘 페이지 노션으로 작성해서 API 연동*/}
          <Link
            to={"/algoritm"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <span> 알고리즘 </span>
          </Link>
        </div>
        <div className="nav-contact-page">
          {/* contact 페이지 노션 연동 완료  */}
          <Link
            to={"/contact"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <span> Contact </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

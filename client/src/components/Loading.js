import React from "react";
import "./Loading.css";
import Spinner from "./assets/spinners.gif";

export default function Loading() {
  return (
    <div className="loading-background">
      <div className="loading 1">
        <div className="loading-text"> 이미지 생성중입니다...</div>
        <img src={Spinner} alt="로딩중" width="5%"></img>
      </div>
    </div>
  );
}

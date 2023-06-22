import React, { useState } from "react";
import "./LastPage.css";
import App from "../App";
import { Link } from "react-router-dom";

export default function LastPage({ url }) {
  const refresh = () => {
    window.location.reload();
  };
  // 최종 화면 component
  return (
    <div className="Ending-Container">
      <div className="Ending-Complete-Title">
        <h1>Complete</h1>
      </div>
      <div className="Ending-Image">
        {/* img 백에서 받아오기 */}
        <img src={url}></img>
      </div>
      <div className="Ending-Button-Container">
        {/* Downdload 버튼 클릭시 다운로드 기능 구현 필요 */}
        <a className="Ending-Download" href={url} download>
          <button>이미지 다운로드</button>
        </a>

        <button className="Ending-Restart" onClick={refresh}>
          다시하기
        </button>
      </div>
    </div>
  );
}

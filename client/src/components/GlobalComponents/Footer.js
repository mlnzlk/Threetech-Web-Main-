import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    // 학교와 핀다 div에 로고들 활용하여 넣을 예정.
    <div className="footer-container">
      <div className="footer-link-box">
        <div className="footer-link-text">
          <span>광운대학교 SW 산학 연계 프로젝트</span>
          <br></br>
          <span>쓰리테크팀 | 권준혁, 장은수, 변종석, 권민지, 김다연</span>
          <br></br>
          <span>핀다 | https://finda.co.kr/</span>
        </div>
      </div>
    </div>
  );
}
/* 
핀다, 학교 로고 
<a href="https://finda.co.kr">핀다</a>
        <a href="https://www.kw.ac.kr/ko/">광운대학교</a>
 */

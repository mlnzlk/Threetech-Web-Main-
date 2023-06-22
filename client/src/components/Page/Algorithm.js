import React, { useState, useEffect } from "react";
import "./Algorithm.css";
import "react-notion/src/styles.css";
import { NotionRenderer } from "react-notion";

export default function Algorithm() {
  // 컨택트 페이지, 컨택트 페이지 양식 참조해서 만들 것
  //  노션페이지 렌더링 함수 선언
  const [response, setResponse] = useState({});

  useEffect(() => {
    // 두번째 방법
    // 알고리즘 페이지 만들면 뒤에 부분 API 따와서 대입하면 끝
    const NOTION_PAGE_ID = "Algoritm-53eccf9d08084db5a25d256e4a913835";
    fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then((res) => res.json())
      .then((resJson) => {
        setResponse(resJson);
      });
  }, []);

  return (
    <div className="contact-container">
      <NotionRenderer blockMap={response} fullPage={true}></NotionRenderer>
    </div>
  );
}

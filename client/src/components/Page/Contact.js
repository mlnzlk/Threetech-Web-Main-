import React, { useState, useEffect } from "react";
import "./Contact.css";
import "react-notion/src/styles.css";
import { NotionRenderer } from "react-notion";

export default function Contact() {
  // 컨택트 페이지, 컨택트 페이지 양식 참조해서 만들 것
  //  노션페이지 렌더링 함수 선언
  const [response, setResponse] = useState({});

  useEffect(() => {
    // 두번째 방법
    const NOTION_PAGE_ID = "Team-Member-82c0d12456f24cc3a16bcebd1b6ebe6b";
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

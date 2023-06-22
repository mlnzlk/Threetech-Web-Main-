import React, { useState } from "react";
import Footer from "./components/GlobalComponents/Footer";
import ImageSlider from "./components/ImageSlider";
import LastPage from "./components/LastPage";
import Loading from "./components/Loading";
import ImageGallery from "./components/ImageGallery";
import PromptRadio from "./components/PromptRadio";
import TopNav from "./components/GlobalComponents/TopNav";
import Contact from "./components/Page/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Algorithm from "./components/Page/Algorithm";
/* To do List
 ㅁ 이미지 한 컴포넌트로 몰아서 정리하기 
 ㅁ 폰트 하나 골라서 전체에 적용하기 
 ㅁ 풋터 전체 사이즈 크기 조절하기? 
 ㅁ 결과창 다운로드 버튼과 새로 시작하기 버튼 적용하기
 ㅁ 모든 기능 구현 후 클린코드 작성 
*/

/* 권준혁 확인
그림 셀렉하는거랑 prompt 창 click 버튼은 PromptRadio에 전부 들어있음 
거기서 조절하면 될 듯?

 */
function App() {
  const [counter, setCounter] = useState(0);

  function onClick() {
    setCounter(counter + 1);
  }

  return (
    <BrowserRouter>
      <div className="main-container">
        <TopNav />
        <Routes>
          <Route path="/" element={<PromptRadio />} />
          <Route path="/arts" element={<ImageSlider />} />
          <Route path="/algorithm" element={<ImageSlider />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/arts/all" element={<ImageGallery />} />
          <Route path="/algoritm" element={<Algorithm />} />
        </Routes>

        {/* <ImageSlider />
      <Contact /> */}
        {/* <Loading /> 
      로딩페이지 api 연결 필요 */}

        <Footer />

        {/* <button onClick={onClick}>Click : {counter}</button> */}
        {/* 결과 완료 페이지 입력 받아오면 뜰 수 있게 코드 작성 필요
      버튼 클릭하면 Prompt값 보내주기 --> 기다리는 동안 Loading Page 띄워주기
      결과나오면 마지막 페이지 띄우기 */}
        {/* <div>{counter === 1 ? <LastPage /> : null}</div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

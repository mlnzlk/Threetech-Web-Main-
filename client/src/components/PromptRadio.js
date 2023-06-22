import React from "react";
import { useState, useEffect } from "react";
import "./PromptRadio.css";
import Loading from "./Loading";
import axios from "axios";
import LastPage from "./LastPage";

export default function PromptRadio() {
  const toon = require("./assets/toon.png");
  const casual = require("./assets/casual.png");
  const illust = require("./assets/illust.png");
  const scenery = require("./assets/scenery.png");
  const ani = require("./assets/ani.png");
  const text = require("./assets/text.png");
  const prompt = require("./assets/prompt.png");

  const drawsKind = [
    { name: "웹툰", img: toon },
    { name: "캐주얼", img: casual },
    { name: "애니", img: ani },
    { name: "일러스트", img: illust },
    { name: "풍경", img: scenery },
  ];

  const [count, setCount] = useState([]);
  const [data, setData] = useState([]);
  const [name, setName] = useState([]);
  const [drawKind, setDrawKind] = useState([]);
  const [checkedInput, setCheckedInput] = useState([]);
  const [promptInput, setPromptInput] = useState([]);
  const [btnX, setbtnX] = useState([]);
  const [imgreturn, setImageReturn] = useState(false);
  const [img, setImg] = useState([]);

  const handleClickRadioButton = (e) => {
    console.log(e.target.value);
    setCheckedInput(e.target.value);
  };

  const PromptonChange = (e) => {
    console.log(e.target.value);
    setPromptInput(e.target.value);
    console.log(loading);
  };

  const [loading, setLoading] = useState(false);

  const api = async () => {
    setLoading(true);
    await axios
      .post(
        "http://localhost:8000/drawing",
        {},
        {
          params: {
            prompt: promptInput,
            style: checkedInput,
          },
        }
      )
      .then((response) => {
        console.log(response);
        if (response.data.status === "success") {
          setImageReturn(true);
          setImg(response.data.data.img_URL);
          setLoading(false);
        } else {
          setImageReturn(false);
          setLoading(false);
        }
      })
      .catch(function (error) {
        console.log(error.config);
      });
  };
  if (imgreturn) return <LastPage url={img} />;

  return (
    <div className="radio-prompt-container">
      <div className="prompt-explain">
        <span>이미지 생성</span>
        <br></br>
        <span>원하는 스타일을 설정하고, 프롬프트를 입력해 보세요!</span>
      </div>
      {/* 그림체 선택 부분 시작 */}
      <div className="background-color">
        <div className="radio-title">
          <span>Choose Drawing Style</span>
        </div>
        <div style={drawKind} className="radio-image">
          {drawsKind.map((kind) => (
            <label className="align" key={kind.name}>
              <div className="radio-prompt-image-box">
                <input
                  type="radio"
                  className="input-hidden"
                  value={kind.name}
                  checked={checkedInput === `${kind.name}`}
                  onChange={handleClickRadioButton}
                />
                <img onClick={btnX} src={kind.img}></img>

                <p className="style">{kind.name}</p>
              </div>
            </label>
          ))}
        </div>
      </div>
      {/* 그림체 선택 부분 종료 */}
      {/* Prompt 부분 */}
      <div className="prompt-container">
        <div className="prompt-title-container">
          <div className="prompt-title">
            <span>Prompt </span>
            <br />
            <br></br>
            <span>Input</span>
          </div>
        </div>
        <input
          className="prompt-input"
          type="text"
          maxlength="50"
          onChange={PromptonChange}
        ></input>
      </div>
      <div className="click-button">
        <button onClick={api} type="submit">
          이미지 생성
        </button>
      </div>
      {loading && <Loading />}

      {/* Prompt 부분 종료 */}
    </div>
  );
}

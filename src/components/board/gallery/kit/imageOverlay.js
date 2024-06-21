import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import style from "../gallery.module.css";

// src를 파일형태로 변환
const fetchImageAsFile = async (url, filename) => {
  const response = await fetch(url);
  const blob = await response.blob();
  const file = new File([blob], filename, { type: blob.type });
  return file;
};

const ImageOverlay = ({ detailData, selectItem, setStepIndex, stepIndex }) => {
  // 상태 변수
  const [image1Preview, setImage1Preview] = useState(null);
  const [image2Preview, setImage2Preview] = useState(null);
  const [files, setFiles] = useState([]);

  const canvasRef = useRef(null);

  // 초기 이미지 로드
  useEffect(() => {
    // const loadImages = async () => {
    //   const promises = selectItem.map((item, i) =>
    //     fetchImageAsFile(
    //       `/images/kitExample/viewImage/tone/${item}.png`,
    //       `${item}.png`
    //     )
    //   );
    //   const loadedFiles = await Promise.all(promises);
    //   console.log(loadedFiles);
    //   setFiles(loadedFiles);
    // };
    // loadImages();
  }, []);

  // 캔버스에 이미지 그리기
  useEffect(() => {
    if (selectItem.length !== 0) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const drawImages = async () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let firstImageLoaded = false;

        for (const item of selectItem) {
          const img = new Image();
          img.src = item?.src;

          await new Promise((resolve) => {
            img.onload = () => {
              if (!firstImageLoaded) {
                // 캔버스 크기를 첫 번째 이미지 크기로 설정
                canvas.width = 850;
                canvas.height = 630;
                firstImageLoaded = true;
              }
              ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
              resolve();
            };
          });
        }
      };

      drawImages();
    }
  }, [selectItem]);

  // 이미지 병합 및 다운로드
  const handleMergeImages = () => {
    // if (!image1Preview || !image2Preview) {
    //   console.error("Both images must be uploaded");
    //   return;
    // }

    const canvas = canvasRef.current;
    const mergedImage = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = mergedImage;
    link.download = "merged_image.png";
    link.click();
  };

  return (
    <div className={style.complete_wrapper}>
      <div className={style.content_wr}>
        {stepIndex === 2 ? (
          <div className={style.complete_head}>
            <p className="logo">
              KIT<span>:A</span>
            </p>
            <p className={style.auth_font}>@{detailData?.auth}</p>
          </div>
        ) : null}
        <canvas
          ref={canvasRef}
          style={{
            display: "block",
          }}
        />
        {stepIndex === 2 ? (
          <>
            <div
              style={{ background: "#F7F8F9", padding: "15px 20px" }}
              className="flex_start font_16"
            >
              <div className={style.profile_wr}>
                <img src="/images/profile.png" alt="" />
              </div>
              {detailData?.auth}
            </div>
            <button className="btn_red" onClick={handleMergeImages}>
              이미지 다운로드
            </button>
          </>
        ) : null}
      </div>
      {stepIndex === 2 ? (
        <>
          {" "}
          <p className={style.complete_font}>KIT 조립이 완료되었습니다</p>
          <div className={style.reply_btn_wr}>
            <button
              className="btn_default"
              onClick={() => {
                setStepIndex(0);
              }}
            >
              다시 조립하러가기
            </button>
            <button
              className="btn_secondary"
              onClick={() => {
                setStepIndex(stepIndex - 1);
              }}
            >
              수정하기
            </button>
          </div>
          <div className="btn_default">
            <Link
              to={"/KitList"}
              onClick={() => {
                setStepIndex(stepIndex - 1);
              }}
            >
              목록으로
            </Link>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ImageOverlay;

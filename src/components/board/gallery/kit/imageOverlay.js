import React, { useState, useEffect, useRef } from "react";

// src를 파일형태로 변환
const fetchImageAsFile = async (url, filename) => {
  const response = await fetch(url);
  const blob = await response.blob();
  const file = new File([blob], filename, { type: blob.type });
  return file;
};

const ImageOverlay = ({ selectItem }) => {
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
          img.src = item;

          await new Promise((resolve) => {
            img.onload = () => {
              if (!firstImageLoaded) {
                // 캔버스 크기를 첫 번째 이미지 크기로 설정
                canvas.width = img.width;
                canvas.height = img.height;
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
    <div>
      <h2>Upload and Merge Images</h2>
      <canvas
        ref={canvasRef}
        style={{
          border: "1px solid black",
          display: "block",
          marginTop: "20px",
        }}
      />
      <button onClick={handleMergeImages} style={{ marginTop: "20px" }}>
        Merge Images and Download
      </button>
    </div>
  );
};

export default ImageOverlay;

import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "./gallery.module.css";
import axios from "axios";

// component
import ImageOverlay from "./kit/imageOverlay";
import Intro from "./kit/intro";
import Assemble from "./kit/assemble";

export default function GalleryDetail() {
  const location = useLocation();
  const navigate = useNavigate();

  const [stepIndex, setStepIndex] = useState(0);
  const [selectItem, setSelectItem] = useState([]);

  const { data, index, odd, returnState } = location.state || {}; // 나중에 post 로 활용가능 남겨둘것 !
  const [detailData, setDetailData] = useState();
  const [kitItemData, setKitItemData] = useState();

  const getDetailData = async () => {
    await axios
      .get("/dummy/postDetail.json")
      .then((res) => {
        let resultData = res?.data?.postDetail;
        setDetailData(resultData);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const getKitItemData = async () => {
    await axios
      .get("/dummy/kitSample.json")
      .then((res) => {
        let resultData = res?.data?.KitAssemble;
        setKitItemData(resultData);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    getDetailData();
  }, []);

  useEffect(() => {
    getKitItemData();
  }, [detailData]);

  if (!detailData) {
    return <div>Loading...</div>; // 데이터를 불러오는 동안 로딩 상태를 표시
  }

  return (
    <>
      <div className={style.gallery_wr} id="">
        {stepIndex === 0 ? (
          <div className={style.head}>
            <Link to={"/KitList"}>
              <img
                style={{ marginRight: "25px" }}
                src="/images/arrow_index.png"
                alt=""
              />
              KIT: 리스트
            </Link>
          </div>
        ) : stepIndex === 2 ? null : (
          <div className={style.head}>
            <div
              onClick={() => {
                setStepIndex(stepIndex - 1);
              }}
            >
              <img
                style={{ marginRight: "25px" }}
                src="/images/arrow_index.png"
                alt=""
              />
              KIT: 리스트
            </div>
          </div>
        )}
        <div
          style={stepIndex === 2 ? { width: "100%" } : null}
          className={style.gallery_box}
        >
          <div className={style.content_wr}>
            {stepIndex === 0 ? (
              <img src={"/images/kitExample/kitSampleImage.png"} />
            ) : (
              <ImageOverlay
                detailData={detailData}
                selectItem={selectItem}
                setStepIndex={setStepIndex}
                stepIndex={stepIndex}
              />
            )}
          </div>
        </div>
        {stepIndex === 0 ? (
          <div className={style.side_bar_wr}>
            <Intro detailData={detailData} setStepIndex={setStepIndex} />
          </div>
        ) : stepIndex === 1 ? (
          <div className={style.side_bar_wr}>
            <Assemble
              detailData={detailData}
              setStepIndex={setStepIndex}
              kitItemData={kitItemData}
              setSelectItem={setSelectItem}
              selectItem={selectItem}
            ></Assemble>
          </div>
        ) : null}
      </div>
    </>
  );
}

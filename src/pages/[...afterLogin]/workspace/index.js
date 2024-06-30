import React, { useState, useEffect } from "react";
import PageBanner from "../../../components/pageBanner";
import style from "./workspace.module.css";
import MyKitList from "../../../components/board/gallery/workspace/myKitList";
import axios from "axios";

export default function WorkSpace() {
  const [realTimePost, setRealTimePost] = useState([]);

  const getRealTimePost = async () => {
    await axios
      .get("/dummy/postList.json")
      .then((res) => {
        let resultData = res?.data?.realTimePop;
        setRealTimePost(resultData);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  useEffect(() => {
    getRealTimePost();
  }, []);

  return (
    <div className="">
      <div className="layout">
        <div style={{ position: "relative" }}>
          <PageBanner page={"workspace"}></PageBanner>
        </div>
        <div className={style.guide_btn}>
          <p>
            <span style={{ marginRight: "20px" }} className="red">
              필독
            </span>
            저작권 가이드라인을 확인하시겠습니까?
          </p>
          <button className="flex_between">
            가이드라인 보러가기
            <div className={style.arrow_btn}>
              <img src="/images/dark/r_arrow_w.png" alt="" />
            </div>
          </button>
        </div>
        <MyKitList data={realTimePost} />
      </div>
    </div>
  );
}

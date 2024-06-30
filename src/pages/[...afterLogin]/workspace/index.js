import React, { useState, useEffect } from "react";
import PageBanner from "../../../components/pageBanner";
import style from "./workspace.module.css";
import MyKitList from "../../../components/workspace/myKitList";
import GuideBtn from "../../../components/workspace/guideBtn";
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
        <GuideBtn />
        <MyKitList data={realTimePost} />
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import PageBanner from "../../../components/pageBanner";
import style from "./workspace.module.css";

export default function WorkSpace() {
  return (
    <div className=" layout dark">
      <div style={{ position: "relative" }}>
        <PageBanner page={"workspace"}></PageBanner>
      </div>
      <div>
        <p>
          <span>필독</span>저작권 가이드라인을 확인하시겠습니까?
        </p>
        <button>
          가이드라인 보러가기 <img src="" alt="" />
        </button>
      </div>
    </div>
  );
}

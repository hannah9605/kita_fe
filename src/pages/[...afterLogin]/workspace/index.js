import React, { useState, useEffect } from "react";
import PageBanner from "../../../components/pageBanner";
import style from "./workspace.module.css";

export default function WorkSpace() {
  return (
    <div className=" layout dark">
      <div style={{ position: "relative" }}>
        <PageBanner page={"workspace"}></PageBanner>
      </div>
    </div>
  );
}

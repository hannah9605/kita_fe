import React from "react";
import { Link } from "react-router-dom";
import style from "./main.module.css";

// 이미지

export default function Banner() {
  return (
    <div className={style.banner_wr}>
      <div className={style.banner1}>
        <img src="/images/Main-bn01.png" alt="배너 1이미지 " />
        <div className={style.banner_txt}>
          <p>키타에서 만드는 나의 개성을 담은 이미지 조합 KIT</p>
          <p className="bn_title_32">조립식 일러스트 키트</p>
          <p style={{ fontSize: "48px" }} className="logo">
            KIT<span>:A</span>
          </p>
        </div>
        <Link to="/workspace" className={style.work_btn}>
          키트 제작하러가기
          <img
            style={{ marginLeft: "18px" }}
            src="/images/bn_arrow.png"
            alt="키트제작하러가기 "
          />
        </Link>
      </div>
      <Link to="/Login" className={style.banner2}>
        <span style={{ textAlign: "right" }}>
          <img src="/images/main-bn-login.png" alt="로그인아이콘 " />
        </span>
        <p>
          지금
          <br />
          바로
          <br />
          시작하기
        </p>
      </Link>
    </div>
  );
}

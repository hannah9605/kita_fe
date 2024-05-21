import React, { useState, useEffect } from "react";
import PageBanner from "../../../components/pageBanner";
import style from "./myPage.module.css";

export default function Mypage() {
  let noImg = "/images/no_img.png";
  const [imgFileSrc, setImgFileSrc] = useState(noImg);

  const columns = [
    { key: "profile", title: "프로필 사진", val: "" },
    { key: "connect", title: "연동 계정 정보", val: "user1234@gmail.com" },
    { key: "nickname", title: "닉네임", val: "user1234" },
    { key: "name", title: "이름", val: "김길동", open: false },
  ];
  const columns2 = [
    { key: "email", title: "이메일", val: "user1234@gmail.com", open: false },
    { key: "phone", title: "휴대전화", val: "010-0000-0000", open: false },
  ];

  return (
    <div className=" layout">
      <div style={{ position: "relative" }}>
        <PageBanner page={"mypage"}></PageBanner>
      </div>
      <div className={style.menu_title_wr}>
        <p className="menu_title">로그인 정보</p>
        <button className={style.modify_btn}>
          <img src="/images/modify_ic.png" />
        </button>
      </div>
      <p className={style.menu_subtitle}>
        일부 정보가 KIT:A 서비스를 사용하는 다른사람에게 표시될 수 있습니다.
      </p>
      <div>
        <ul className={style.info_list_wr}>
          {columns?.map((list) => (
            <li
              style={list?.key === "profile" ? { padding: "0" } : null}
              key={list?.key}
            >
              {list?.key === "profile" ? (
                <div className="flex_start">
                  <div className={style.p_img_wr}>
                    <img src={imgFileSrc} alt="프로필이미지" />
                  </div>
                  <div className="flex_start flex_col flex_top">
                    <span style={{ padding: 0 }} className={style.col_tit}>
                      {list?.title}
                    </span>
                    <button
                      className={style.p_img_upload_btn}
                      onClick={() => {
                        alert("서비스 준비중입니다.");
                      }}
                    >
                      <div className="flex_start">
                        <img
                          style={{ marginRight: "10px" }}
                          src="/images/camera_ic.png"
                        />
                        <span>프로필 사진 추가</span>
                      </div>
                      <img src="/images/more_ic.png" />
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <span className={style.col_tit}>{list?.title}</span>
                  <span className={style.col_val}>
                    {list?.val}
                    {list?.open === false && <b>비공개</b>}
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className={style.info_title}>
          <p className="menu_title">연락처 정보</p>
        </div>
        <ul className={style.info_list_wr}>
          {columns2?.map((list) => (
            <li key={list?.key}>
              <div>
                <span className={style.col_tit}>{list?.title}</span>
                <span className={style.col_val}>
                  {list?.val}
                  {list?.open === false && <b>비공개</b>}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

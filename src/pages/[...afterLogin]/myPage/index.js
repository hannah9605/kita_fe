import React, { useState, useEffect } from "react";
import PageBanner from "../../../components/pageBanner";
import style from "./myPage.module.css";

export default function Mypage() {
  let noImg = "/images/no_img.png";
  const [imgFileSrc, setImgFileSrc] = useState(noImg);
  const [modifyMode, setModifyMode] = useState(false);

  const columns = [
    { key: "profile", title: "프로필 사진", val: "" },
    { key: "connect", title: "연동 계정 정보", val: "user1234@gmail.com" },
    { key: "nickname", title: "닉네임", val: "user1234", modify: "Y" },
    { key: "name", title: "이름", val: "김길동", modify: "Y", open: false },
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
        <button
          onClick={() => {
            setModifyMode(!modifyMode);
          }}
          className={style.modify_btn}
        >
          <svg width="30" height="30" fill="none">
            <path
              d="M19.7 3.707a1 1 0 0 1 1.413 0l3.536 3.536a1 1 0 0 1 0 1.414l-12.93 12.93a1 1 0 0 1-.707.293H7.476a1 1 0 0 1-1-1v-3.536a1 1 0 0 1 .293-.707L19.7 3.707z"
              stroke={!modifyMode ? "#9BA6B8" : "#F02941"}
              stroke-width="2"
              stroke-linejoin="round"
            />
            <path
              stroke={!modifyMode ? "#9BA6B8" : "#F02941"}
              stroke-width="2"
              d="m17.223 6.182 4.949 4.949"
            />
            <path
              d="M5.79 26h20.5"
              stroke={!modifyMode ? "#9BA6B8" : "#F02941"}
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
      <p className={style.menu_subtitle}>
        일부 정보가 KIT:A 서비스를 사용하는 다른사람에게 표시될 수 있습니다.
      </p>
      <div>
        <ul className={style.info_list_wr}>
          {columns?.map((list) => (
            <li
              style={
                list?.key === "profile"
                  ? { height: "auto", padding: "0" }
                  : null
              }
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
                <div className="flex_start">
                  <span className={style.col_tit}>{list?.title}</span>
                  <span className={style.col_val}>
                    {modifyMode && list?.modify === "Y" ? (
                      <div className="flex_between">
                        <input
                          type="text"
                          value={list?.val}
                          onChange={() => {}}
                        />
                        {list?.open === false && (
                          <button className="btn">비공개</button>
                        )}
                      </div>
                    ) : (
                      <>
                        {list?.val}
                        {list?.open === false && <b>비공개</b>}
                      </>
                    )}
                  </span>
                </div>
              )}
            </li>
          ))}
          {modifyMode && (
            <li>
              <div className="flex_end btn_box">
                <button
                  className="btn btn_default"
                  onClick={() => {
                    alert("서비스준비중입니다.");
                  }}
                >
                  정보 수정 취소
                </button>
                <button
                  className="btn btn_secondary"
                  onClick={() => {
                    alert("서비스준비중입니다.");
                  }}
                >
                  정보 수정
                </button>
              </div>
            </li>
          )}
        </ul>

        <div className={style.info_title}>
          <p className="menu_title">연락처 정보</p>
        </div>
        <ul className={style.info_list_wr}>
          {columns2?.map((list) => (
            <li key={list?.key}>
              <div className="flex_start">
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

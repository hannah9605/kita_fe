import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import style from "./gallery.module.css";

export default function GalleryDetail() {
  const location = useLocation();
  const navigate = useNavigate();

  const { data, index, odd, returnState } = location.state || {};

  return (
    <>
      <div className={style.gallery_wr} id="">
        <div className={style.head}>
          <div className="default_box "> KIT: 소개</div>
        </div>
        <div className={style.gallery_box}>
          <div className={style.content_wr}></div>
        </div>
        <div className={style.side_bar_wr}>
          <ul>
            <li>
              <p>KIT : TITLE</p>
              <div>{data?.title}</div>
              <p>
                <span className="bookmark_num">125</span>
                <span className="view_num">382</span>
              </p>
            </li>
            <li className="flex_between">
              <div>닉네임 123</div>
              <div className="btn_box">
                <button>찜</button>
                <button>공유</button>
              </div>
            </li>
            <li className="">
              <div className="flex_start">
                <span>KIT : Guide</span>
                <span>유의사항</span>
              </div>
              <div>
                <p>
                  Instagram : User_ID <br />
                  사용 시 반드시 출처를 표기해 주세요.
                  <br /> 금지 사항 : 상업적 이용 / 트레이싱 / 리터칭 / 가공 /
                  유튜브 / 스트리밍
                  <br /> 문의나 신고는 인스타그램 DM으로 부탁드립니다.
                  <br />
                  <br /> Please be sure to indicate the source when using
                  it. Banned: Commercial use / tracing / retouching / processing
                  / YouTube / streaming For inquiries or reports, please send us
                  an Instagram DM.
                </p>
              </div>
            </li>
            <li>
              <span> 허용범위</span>
              <span> 개인적 사용</span>
              <span> 비상업적 사용</span>
              <span> 상업적 사용</span>
              <span> 수정 사용</span>
            </li>
            <li className="flex_center">
              <button>조립하기</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

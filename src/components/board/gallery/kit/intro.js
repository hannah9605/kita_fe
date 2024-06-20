import React, { useState, useEffect } from "react";
import style from "../gallery.module.css";
import axios from "axios";

export default function Intro({ detailData, setStepIndex }) {
  const [tabIndex, setTabIndex] = useState(0);

  // 허용범위 렌더링
  const renderArrowArea = (_data) => {
    if (_data) {
      const arrowArea = [
        { title: "개인적 사용", key: "individual" },
        { title: "비상업적 사용", key: "nonCommercial" },
        { title: "상업적 사용", key: "commerce" },
        { title: "수정 사용", key: "modify" },
      ];

      return (
        <>
          {arrowArea?.map((area) => (
            <span
              className={
                !detailData[area?.key] ? style.area_item : style.area_act_item
              }
              key={area?.key}
            >
              <img
                style={{ marginRight: "2px" }}
                src={
                  !detailData[area?.key]
                    ? "/images/not_available.png"
                    : "/images/available.png"
                }
                alt=""
              />
              {area?.title}
            </span>
          ))}
        </>
      );
    }
  };

  // intro

  return (
    <>
      <ul className={style.intro_wr}>
        {/* 제목 */}
        <li className={style.obj_tit_wr}>
          <p className={style.logo}>
            KIT <span>: TITLE</span>
          </p>
          <div className={style.obj_tit}>{detailData?.title}</div>
          <p>
            <span className="bookmark_num">{detailData?.steam}</span>
            <span className="view_num">{detailData?.view}</span>
          </p>
        </li>
        {/* 글쓴이 */}
        <li className="flex_between">
          <div className="flex_start font_16">
            <div className={style.profile_wr}>
              <img src="/images/profile.png" alt="" />
            </div>
            {detailData?.auth}
          </div>
          <div className="btn_box">
            <button>
              <img src="/images/bookmark-b.png" alt="" />
            </button>
            <button>
              <img src="/images/share.png" alt="" />
            </button>
          </div>
        </li>
        {/*  내용 */}
        <li className={style.intro_con}>
          <div className={style.side_content_wr}>
            <div className={style.side_tab}>
              <span
                onClick={() => {
                  setTabIndex(0);
                }}
                className={tabIndex === 0 ? style.act : null}
              >
                KIT : Guide
              </span>
              <span
                onClick={() => {
                  setTabIndex(1);
                }}
                className={tabIndex === 1 ? style.act : null}
              >
                유의사항
              </span>
            </div>
            <div className={style.side_content}>
              {tabIndex === 0 ? (
                <p>{detailData?.guide}</p>
              ) : (
                <>유의 사항내용 들어갈예정입니다</>
              )}
            </div>
          </div>
        </li>
        <li className={style.area_wr}>
          <span> 허용범위</span>
          {renderArrowArea(detailData)}
        </li>

        <li className={style.assemble_btn}>
          <button
            onClick={() => {
              setStepIndex(1);
            }}
          >
            조립하기
          </button>
        </li>
      </ul>
    </>
  );
}

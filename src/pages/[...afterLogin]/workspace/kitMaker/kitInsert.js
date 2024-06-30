import React, { useState, useEffect } from "react";
import style from "../workspace.module.css";
import axios from "axios";

import GuideBtn from "../../../../components/workspace/guideBtn";

export default function KitInsert() {
  const noImg = "/images/dark/no_img.png";
  const initProfile = [
    { key: "repImg", type: "img", value: "" },
    { title: "제목", key: "title", type: "text", value: "" },
    { title: "KIT : Guide", key: "guide", type: "text", value: "" },
    { title: "기본 워터마크", key: "mark", type: "select", value: "" },
    { title: "키트 허용 범위", key: "area", type: "checkbox", value: "" },
  ];
  const [profile, setProfile] = useState(initProfile);
  // 대표이미지 파일
  const [imgFile, setImgFile] = useState(noImg);
  return (
    <>
      <div className={style.location_wr}>
        <div className={style.location}>
          <p className={style.lo_page}>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
              <path d="M6.5 1L1.5 6L6.5 11" stroke="white" stroke-width="2" />
            </svg>
            <span> KIT 등록 / 수정</span>
          </p>

          <p className={style.lo_log}>
            KIT : 작업실
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="6"
              viewBox="0 0 4 6"
              fill="none"
            >
              <path d="M1 5L3 3L1 1" stroke="#6B6B6B" />
            </svg>
            KIT 등록 / 수정
          </p>
        </div>
      </div>
      <div className="layout">
        <div style={{ marginTop: "30px" }}>
          <GuideBtn />
        </div>
        <div>
          <h3>키트 대표 이미지</h3>
          <table>
            {profile?.map((rowItem, i) => {
              return (
                <tr key={i}>
                  {rowItem.key === "repImg" && i === 0 && (
                    <td rowSpan={profile.length}>
                      <div className={style.reg_img_wr}>
                        <div
                          style={{
                            width: "300px",
                            height: "224px",
                          }}
                          className={
                            imgFile === noImg ? style.default_image : null
                          }
                        >
                          <img src={imgFile} alt="대표이미지" />
                        </div>
                        <label className="flex_between" htmlFor="regImg">
                          <span
                            style={{
                              fontSize: "13px",
                            }}
                            className={style.img_btn}
                          >
                            <img
                              style={{ marginRight: "7.8px" }}
                              src="/images/camera_ic.png"
                            />
                            이미지 등록 / 수정
                          </span>
                        </label>
                      </div>
                    </td>
                  )}
                  <td>
                    {rowItem?.type === "img" ? (
                      <div>
                        <span>{rowItem?.title}</span>
                        <input type={rowItem?.type} />
                      </div>
                    ) : (
                      <div>
                        <span>{rowItem?.title}</span>
                        <input type={rowItem?.type} />
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}

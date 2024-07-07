import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import style from "../workspace.module.css";
import axios from "axios";

import GuideBtn from "../../../../components/workspace/guideBtn";

export default function KitInsert() {
  const noImg = "/images/dark/no_img.png";
  const initProfile = [
    { key: "repImg", type: "img", value: "" },
    { title: "제목", key: "title", type: "text", value: "" },
    { title: "KIT : Guide", key: "guide", type: "text", value: "" },
    {
      title: "기본 워터마크",
      key: "mark",
      type: "select",
      value: "",
      option: [
        { val: "y", txt: "사용" },
        { val: "n", txt: "미사용" },
      ],
    },
    {
      title: "키트 허용 범위",
      key: "area",
      type: "checkbox",
      value: "",
      option: [
        { val: "1", txt: "개인적 사용가능" },
        { val: "2", txt: "비상업적 사용가능" },
        { val: "3", txt: "상업적 사용가능" },
        { val: "4", txt: "수정 사용가능" },
      ],
    },
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
        {/* 키트 대표이미지 */}
        <div>
          <h3 style={{ color: "#fff" }}>키트 대표 이미지</h3>
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
                    {rowItem?.type === "select" ? (
                      <div>
                        <span>{rowItem?.title}</span>
                        <select>
                          {rowItem?.option?.map((opItem, i) => {
                            return (
                              <option value={opItem?.val}>{opItem?.txt}</option>
                            );
                          })}
                        </select>
                      </div>
                    ) : rowItem?.type === "checkbox" ? (
                      <div>
                        <span>{rowItem?.title}</span>
                        <div className="flex_end">
                          {rowItem?.option?.map((opItem, i) => {
                            return (
                              <div key={i}>
                                <input
                                  type="checkbox"
                                  id={opItem?.val}
                                  name={rowItem?.key}
                                />
                                <label
                                  style={{ color: "#fff" }}
                                  htmlFor={opItem?.val}
                                >
                                  {opItem?.txt}
                                </label>
                              </div>
                            );
                          })}
                        </div>
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
        {/* 아이템 키트 */}
        <div>
          <h3 style={{ color: "#fff" }}>아이템 키트</h3>
          <ul>
            <li>개수 제한 : 아이템 키트는 최대 23개까지 생성 가능합니다.</li>
            <li>
              레이어 순 : 1번이 최 하단 레이어 입니다. 마지막에 올라가는 아이템
              키트가 레이어 최상단으로 올라옵니다.
            </li>
            <li>
              이미지 비율 제한 : 1:1 비율로 업로드 하지 않을 시 이미지가 잘릴 수
              있습니다.
            </li>
          </ul>
          <div>
            <ul>
              <li>
                <span>1</span>
                <div>
                  <img src="" alt="" />
                  <div>
                    <span>이미지 자리</span>
                    <span>아이템 키트 명</span>
                    <div>
                      <p className="flex_between">
                        <input
                          type="text"
                          placeholder="아이템 키트 명을 적어주세요"
                        />
                        <button>숨기기</button>
                        <button>휴지통</button>
                      </p>
                      <div className="flex_between">
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
                            이미지 / 수정
                          </span>
                        </label>
                        <div style={{ width: "130px" }}>
                          <Link className="btn_red">아이템설정</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import style from "./board.module.css";

import PageBanner from "../pageBanner";

export default function BoardDetail() {
  const location = useLocation();
  const navigate = useNavigate();

  const { data, index, odd, returnState } = location.state || {};

  const getList = (tabIndex) => {
    // navigate(`/Support`, {
    //   replace: false,
    //   state: { _tabIndex: tabIndex },
    // });
  };

  //뒤로가기시 페이지 = path에서 파람 전달  // => 나중에 개발
  useEffect(() => {
    if (returnState) {
      console.log("Received return state:", returnState);
    }
  }, [returnState]);

  return (
    <>
      <div className=" layout" id="detail_view">
        <div style={{ position: "relative" }}>
          <PageBanner page={odd?.pageName}></PageBanner>
          {/* 탭메뉴 */}
          <ul className="tab_box flex_center">
            {odd?.pageTab?.map((tabItem) => {
              return (
                <li
                  key={tabItem?.key}
                  className={
                    tabItem?.key === odd?.tabIndex
                      ? "flex_center tab_item  active"
                      : "flex_center tab_item"
                  }
                  onClick={() => {
                    getList(tabItem?.key);
                  }}
                >
                  {tabItem?.title}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={style.list_table_wr}>
          <table className={style.list_table}>
            <thead>
              <tr>
                <th>공지사항</th>
                <th>{data?.title}</th>
              </tr>
              <tr>
                <th>작성자</th>
                <th>{data?.auth}</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colSpan={2}>{data?.content}</td>
              </tr>

              <tr>
                {index > 0 ? <td>{odd?.data[index - 1]?.title}</td> : null}
                {index < odd?.length ? (
                  <td>{odd?.data[index + 1]?.title}</td>
                ) : null}
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <div>{data?.title}</div>
          <div>{data?.auth}</div>
          <div>{data?.content}</div>
        </div>
      </div>
    </>
  );
}

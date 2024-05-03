import React from "react";
import { Link } from "react-router-dom";
import style from "./main.module.css";
import Banner from "./banner";

export default function Main() {
  const realTimePop = [
    {
      title: "작품명",
      auth: "작가",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
    },
    {
      title: "작품명2",
      auth: "작가2",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
    },
    {
      title: "작품명3",
      auth: "작가3",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
    },
    {
      title: "작품명4",
      auth: "작가4",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
    },
  ];

  const newKit = [
    {
      title: "작품명",
      auth: "작가",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
    },
    {
      title: "작품명2",
      auth: "작가2",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
    },
    {
      title: "작품명3",
      auth: "작가3",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
    },
    {
      title: "작품명4",
      auth: "작가4",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
    },
    {
      title: "작품명",
      auth: "작가",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
    },
    {
      title: "작품명2",
      auth: "작가2",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
    },
    {
      title: "작품명3",
      auth: "작가3",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
    },
    {
      title: "작품명4",
      auth: "작가4",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
    },
  ];

  return (
    <div className=" layout padding_bt_200">
      {/* 배너  */}
      <Banner />
      {/* 리스트 */}
      <div style={{ marginBottom: "169px" }}>
        {/* 실시간 인기 kit */}
        <div className="kit_list_wr">
          <p className="flex_start menu_title">
            <img src="/images/title.png" alt="bullet" />
            <span>실시간 인기 KIT</span>
          </p>
          <ul className="flex_between kit_list">
            {realTimePop?.map((item) => {
              return (
                <li>
                  <div className="thumb_img_wr">
                    <img src={item?.thumbnail} alt="썸네일이미지" />
                    <button className="thumb_bookmark" alt="북마크"></button>
                  </div>
                  <p className="kit_title">{item?.title}</p>
                  <p className="kit_auth">{item?.auth}</p>
                  <div>
                    <span className="bookmark_num">{item?.steam}</span>
                    <span className="view_num">{item?.view}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {/* 신작 kit */}

        <div style={{ marginTop: "88px" }} className="kit_list_wr">
          <p className="flex_start menu_title">
            <img src="/images/title.png" alt="bullet" />
            <span>따끈따끈한 신작 KIT</span>
          </p>
          <ul className="flex_between kit_list">
            {newKit?.map((item) => {
              return (
                <li>
                  <div className="thumb_img_wr">
                    <img src={item?.thumbnail} alt="썸네일이미지" />
                    <button className="thumb_bookmark" alt="북마크"></button>
                  </div>
                  <p className="kit_title">{item?.title}</p>
                  <p className="kit_auth">{item?.auth}</p>
                  <div>
                    <span className="bookmark_num">{item?.steam}</span>
                    <span className="view_num">{item?.view}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {/* 하단배너 */}
      </div>
    </div>
  );
}

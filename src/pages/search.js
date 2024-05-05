import React from "react";
import { useLocation } from "react-router-dom";
// import axios from "axios";
// component
import KitPostList from "../components/kitPostList";
import PageBanner from "../components/pageBanner";

export default function Search() {
  const location = useLocation();
  const { word } = location.state || {};
  const searchResult = [
    {
      title: "작품명",
      auth: "작가",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
      id: "12",
    },
    {
      title: "작품명2",
      auth: "작가2",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
      id: "132",
    },

    {
      title: "작품명4",
      auth: "작가4",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
      id: "133332",
    },
  ];

  // 필터링 된 값 받아오는 api 필요
  const getResult = () => {};

  return (
    <div className=" layout " id="search">
      <PageBanner page={"search"}></PageBanner>
      {/* 리스트 */}
      <div style={{ marginBottom: "200px" }}>
        <div>
          <p style={{ margin: "100px 0 6px" }} className="menu_title">
            검색 결과
          </p>
          <p>
            ‘{word}’ 관련 검색 결과가<span>{searchResult?.length}</span>건
            검색되었습니다.
          </p>
        </div>
        {/* 실시간 인기 kit */}
        <div className="list_section">
          <KitPostList data={searchResult} title={"search"}></KitPostList>
        </div>
        {/* 신작 kit */}
      </div>
    </div>
  );
}

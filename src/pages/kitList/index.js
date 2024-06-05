import React from "react";
// component
import KitPostList from "../../components/board/gallery/kitPostList";
import PageBanner from "../../components/pageBanner";

export default function KitListPage() {
  const realTimePop = [
    {
      title: "작품명",
      auth: "작가",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
      id: "12",
    },
    {
      title: "간편한 일러스트 제작 키트",
      auth: "작가2",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
      id: "132",
    },
    {
      title: "간편한 일러스트 제작 키트3",
      auth: "작가3",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
      id: "1342",
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

  const newKit = [
    {
      title: "작품명",
      auth: "작가",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
      id: "12",
      bookmark: false,
    },
    {
      title: "작품명2",
      auth: "작가2",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
      id: "132",
      bookmark: true,
    },
    {
      title: "작품명3",
      auth: "작가3",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
      id: "1342",
      bookmark: false,
    },
    {
      title: "작품명4",
      auth: "작가4",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
      id: "133332",
      bookmark: false,
    },
    {
      title: "작품명",
      auth: "작가",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
      id: "122",
      bookmark: false,
    },
    {
      title: "작품명2",
      auth: "작가2",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
      id: "1323",
      bookmark: false,
    },
    {
      title: "작품명3",
      auth: "작가3",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
      id: "13421",
      bookmark: false,
    },
    {
      title: "작품명4",
      auth: "작가4",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
      id: "1333312",
      bookmark: false,
    },
    {
      title: "작품명4",
      auth: "작가4",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
      id: "1333312",
      bookmark: false,
    },
  ];

  return (
    <div className=" layout" id="kitList">
      <PageBanner page={"list"}></PageBanner>
      {/* 리스트 */}
      <div style={{ marginBottom: "200px" }}>
        {/* 실시간 인기 kit */}
        <div className="list_section">
          <KitPostList data={realTimePop} title={"hot"}></KitPostList>
        </div>
        {/* kit list */}
        <div className="list_section">
          <KitPostList data={newKit} title={"list"}></KitPostList>
        </div>
      </div>
    </div>
  );
}

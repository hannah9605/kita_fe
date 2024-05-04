import React from "react";
import { Link } from "react-router-dom";
import style from "./main.module.css";
// component
import Banner from "./banner";
import KitPostList from "../../components/kitPostList";

export default function Main() {
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
      title: "작품명2",
      auth: "작가2",
      steam: 125,
      view: 382,
      thumbnail: "/images/sample.jpg",
      id: "132",
    },
    {
      title: "작품명3",
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
      title: "작품명3",
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
      title: "작품명3",
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
  const renderPostList = (_data, title) => {
    return (
      <div className="kit_list_wr">
        <p className="flex_start menu_title">
          <img src="/images/title.png" alt="bullet" />
          <span>{title}</span>
        </p>

        <ul className="flex_between kit_list">
          {_data?.map((item) => {
            return (
              <li>
                <Link to={`/post/${item?.id}`}>
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
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div className=" layout padding_bt_200">
      {/* 배너  */}
      <Banner />
      {/* 리스트 */}
      <div style={{ marginBottom: "169px" }}>
        {/* 실시간 인기 kit */}
        <KitPostList data={realTimePop} title={"hot"}></KitPostList>
        {/* 신작 kit */}
        <div style={{ marginTop: "88px" }}>
          <KitPostList data={newKit} title={"new"}></KitPostList>
        </div>
      </div>
      {/* 하단 배너 */}
      <div className="flex_between">
        <Link to="/notice" className={style.b_notice}>
          <div>
            <p className={style.footer_bn_tit}>공지사항</p>
            <p className={style.footer_bn_txt}>
              KIT:A의 중요공지사항을
              <br /> 지금 바로 확인해보세요
            </p>
          </div>
          <div className={style.footer_bn_img}>
            <img src="/images/notice.png" alt="notice" />
            <img src="/images/Arrow.png" alt="Arrow" />
          </div>
        </Link>
        <Link to="/faq" className={style.b_faq}>
          <div>
            <p className={style.footer_bn_tit}>FAQ</p>
            <p className={style.footer_bn_txt}>
              자주 물어보는 질문을
              <br /> 확인해보세요
            </p>
          </div>
          <div className={style.footer_bn_img}>
            <img src="/images/faq.png" alt="faq" />
            <img src="/images/Arrow.png" alt="Arrow" />
          </div>
        </Link>
      </div>
    </div>
  );
}

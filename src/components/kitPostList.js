import React from "react";
import { Link } from "react-router-dom";

// 이미지

export default function KitPostList({ data, title }) {
  const ListTitle = {
    hot: "실시간 인기 KIT",
    new: "따끈따끈한 신작 KIT",
    list: "KIT 리스트",
  };
  return (
    <div className="kit_list_wr">
      {title === "search" ? null : (
        <p className="flex_start menu_title">
          <img src="/images/title.png" alt="bullet" />
          <span>{ListTitle[title] ? ListTitle[title] : null}</span>
        </p>
      )}
      <ul className="flex_between kit_list">
        {data?.map((item) => {
          return (
            <li key={`${title} ${item.id}`}>
              <Link to={`/post/${item?.id}`}>
                <div className="thumb_img_wr">
                  <img src={item?.thumbnail} alt="썸네일이미지" />
                  <button
                    onClick={() => {}}
                    className="thumb_bookmark"
                    alt="북마크"
                  >
                    {item?.scrap ? (
                      <img src="/images/bookmark_act.png" alt="bookmark_act" />
                    ) : (
                      <img src="/images/thumb_bookmark.png" alt="bookmark" />
                    )}
                  </button>
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
}

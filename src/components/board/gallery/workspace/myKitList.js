import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../pagination";
import PhotoTable from "../../gallery/photoTable";

// 이미지

export default function MyKitList({ data, title }) {
  const [activeTab, setActiveTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  // useState(20); // 나중에 바꾸기

  const tabList = [
    { title: "전체", key: 0 },
    { title: "공개", key: 1 },
    { title: "비공개", key: 2 },
  ];

  /* 페이징 */
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  return (
    <div className="kit_list_wr">
      <p className="flex_start menu_title">
        <span>내 KIT 리스트</span>
        <div style={{ marginLeft: "20px" }}>
          <input type="text" />
        </div>
      </p>
      <ul className="flex_start kit_tabList">
        {tabList?.map((tabItem, index) => {
          return (
            <li
              onClick={() => {
                setActiveTab(tabItem?.key);
              }}
              className={tabItem?.key === activeTab ? "act" : null}
              key={index}
            >
              {tabItem?.title}
            </li>
          );
        })}
      </ul>
      <PhotoTable data={currentPosts(data)} mode={"dark"} />

      <div style={{ width: "150px" }}>
        <button className="btn_red"> + KIT 제작하기</button>
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data?.length}
        paginate={setCurrentPage}
        currentPage={currentPage}
      ></Pagination>
    </div>
  );
}

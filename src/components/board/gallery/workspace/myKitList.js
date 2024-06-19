import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../pagination";
import PhotoTable from "./photoTable";

// 이미지

export default function MyKitList({ data, title }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
  // useState(20); // 나중에 바꾸기

  /* 페이징 */
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };
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
      <PhotoTable
        data={
          title === "list" || title === "search" ? currentPosts(data) : data
        }
      />

      {title === "list" || title === "search" ? (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={data?.length}
          paginate={setCurrentPage}
          currentPage={currentPage}
        ></Pagination>
      ) : null}
    </div>
  );
}
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../pagination";
import PhotoTable from "./photoTable";

// 이미지

export default function KitPostList({ data, title }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
  // useState(20); // 나중에 바꾸기

  /* 페이징 */
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };
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
      <PhotoTable
        data={
          title === "list" || title === "search" ? currentPosts(data) : data
        }
      />

      {title === "list" || title === "search" ? (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={data?.length}
          paginate={setCurrentPage}
          currentPage={currentPage}
        ></Pagination>
      ) : null}
    </div>
  );
}

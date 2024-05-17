import React, { useState, useEffect } from "react";
import style from "./boardList.module.css";
import ListTable from "./listTable";
import Pagination from "./pagination";

export default function BoardList({ columns, data, pageData }) {
  const [posts, setPosts] = useState(data);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5); // 나중에 바꾸기

  /* 페이징 */
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  return (
    <div className={style.list_table_wr}>
      <ListTable
        posts={currentPosts(posts)}
        columns={columns}
        pageData={pageData}
        // loading={loading}  // 나중에 axios연결
      />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts?.length}
        paginate={setCurrentPage}
      ></Pagination>
    </div>
  );
}

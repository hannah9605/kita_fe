import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex_between layout">
      <ul className="flex_start">
        <li>
          <Link to="/">KIT:A</Link>
        </li>
        <li>
          <Link to="/List">KIT 리스트</Link>
        </li>
        <li>
          <Link to="/Support">고객지원</Link>
        </li>
      </ul>
      <div className="flex_start">
        <div>
          <input type="text" placeholder="검색어를 입력해주세요" />
          <img src="" alt="검색아이콘" />
        </div>
        <span>로그인</span>
      </div>
    </div>
  );
};

export default Nav;

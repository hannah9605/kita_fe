import React from "react";
import { Link } from "react-router-dom";
import style from "./nav.module.css";

// 이미지

const Nav = () => {
  return (
    <div className="nav flex_center">
      <div className="flex_between layout ">
        <ul className={style.nav_menu}>
          <li>
            <Link className="logo" to="/">
              KIT<span>:A</span>
            </Link>
          </li>
          <li>
            <Link to="/Lis t">KIT 리스트</Link>
          </li>
          <li>
            <Link to="/Support">고객지원</Link>
          </li>
        </ul>
        <div className="flex_start">
          <div className={style.sch_bar}>
            <input type="text" placeholder="검색어를 입력해주세요" />
            <img src="/images/search.png" alt="검색아이콘" />
          </div>
          <button className={style.login_btn}>
            <img
              style={{ marginRight: "8px" }}
              src="/images/profile.png"
              alt="프로필아이콘"
            />
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;

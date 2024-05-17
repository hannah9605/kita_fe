import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./nav.module.css";

// 이미지

const Nav = () => {
  let loginCheck = window.sessionStorage.getItem("login");

  const [searchValue, setSearchValue] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [userMore, setUserMore] = useState(false);
  const navigate = useNavigate(); // useNavigate 사용
  const getSearch = () => {
    navigate("/Search", { replace: true, state: { word: searchValue } });
    // 이동후 초기화
    setSearchValue("");
  };

  const handleChange = (e) => {
    if (e.code === "Enter") {
      getSearch();
    } else {
      let value = e.target.value;
      setSearchValue(value);
    }
  };
  useEffect(() => {
    console.log("로그인변경");
    setIsLogin(loginCheck);
  }, [loginCheck]);

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
            <Link to="/KitList">KIT 리스트</Link>
          </li>
          <li>
            <Link to="/Support">고객지원</Link>
          </li>
        </ul>
        <div className="flex_start">
          <div className={style.sch_bar}>
            <input
              type="text"
              placeholder="검색어를 입력해주세요"
              value={searchValue}
              onChange={(e) => {
                handleChange(e);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  getSearch();
                }
              }}
            />
            <img
              onClick={(e) => {
                e.preventDefault();
                getSearch();
              }}
              src="/images/search.png"
              alt="검색아이콘"
            />
          </div>
          {isLogin ? (
            <div style={{ position: "relative" }} className={style.profile}>
              <button
                onClick={() => {
                  setUserMore(!userMore);
                }}
                className={style.login_btn}
              >
                <img
                  style={{ marginRight: "8px" }}
                  src={"/images/profile.png"}
                  alt="프로필아이콘"
                />
                사용자
              </button>
              {userMore && (
                <ul className={style.user_more_wr}>
                  <li>
                    <Link to="/myPage">내정보</Link>
                  </li>
                  <li>
                    <Link to="/myPage">찜목록</Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        window.sessionStorage.setItem("login", false);
                      }}
                    >
                      <span>로그아웃</span>
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <Link to="/Login" className={style.login_btn}>
              <img
                style={{ marginRight: "8px" }}
                src={"/images/profile.png"}
                alt="프로필아이콘"
              />
              로그인
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./nav.module.css";

// 이미지

const Nav = () => {
  let loginCheck = JSON.parse(window.sessionStorage.getItem("login"));

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
  const logOut = () => {
    window.sessionStorage.setItem("login", false);
    navigate("/", { replace: true });
  };

  useEffect(() => {
    console.log("로그인변경", loginCheck);
    if (loginCheck === false) {
      setUserMore(false);
      alert("로그아웃 되었습니다.");
    } else {
    }
    setIsLogin(loginCheck);
  }, [loginCheck]);
  console.log(isLogin);

  return (
    <div className="nav flex_center">
      <div className="flex_between default_box ">
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
          {!isLogin ? (
            <Link to="/Login" className={style.login_btn}>
              <img
                style={{ marginRight: "8px" }}
                src={"/images/profile.png"}
                alt="프로필아이콘"
              />
              로그인
            </Link>
          ) : (
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
                    <Link to="/Mypage">내정보</Link>
                  </li>
                  <li>
                    <Link to="/Bookmark">찜목록</Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        logOut();
                      }}
                    >
                      <span>로그아웃</span>
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;

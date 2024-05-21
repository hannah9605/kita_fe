import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import style from "./login.module.css";

export default function Login() {
  const [cookies, setCookie] = useCookies();
  const navigate = useNavigate();

  const logIn = () => {
    window.sessionStorage.setItem("login", true);
    navigate("/", { replace: true });
  };

  return (
    <div className={style.login_bg}>
      <div className={style.login_wr}>
        <div className="flex_center">
          <p style={{ fontSize: "48px" }} className="logo">
            KIT<span>:A</span>
          </p>
          <p className="bn_title_32"> 로그인</p>
        </div>
        <ul className={style.login_item_wr}>
          <li className={`${style.login_item} ${style.naver}`}>
            <button
              onClick={() => {
                logIn();
              }}
            >
              네이버 로그인
            </button>
          </li>
          <li className={`${style.login_item} ${style.kakao}`}>
            <button>카카오 로그인</button>
          </li>
          <li className={`${style.login_item} ${style.google}`}>
            <button>구글 로그인</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

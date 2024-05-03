import React from "react";
import { Link } from "react-router-dom";

// 이미지

const Footer = () => {
  return (
    <div className=" flex_center">
      <div className="flex_start flex_top layout">
        <Link style={{ marginRight: "68px" }} className="f_logo" to="/">
          KIT:A
        </Link>
        <ul className="footer_txt">
          <li>(주) KIT:A | 대표 : 홍길동 | 사업자 등록 번호 : 000-00-0000</li>
          <li>주소 : 서울특별시 어쩌구 무슨로</li>
          <li>
            연락처 : 010-0000-0000 | 팩스 : 000-000-0000 | 이메일 :
            0000@gmail.com
          </li>
          <li> COPYRIGHT © KIT:A ALL RIGHT RESERVED.</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

// component

const PageBanner = ({ page }) => {
  const title = {
    list: "KIT 리스트",
    search: "검색",
    support: "고객지원",
    mypage: (
      <>
        안녕하세요 <span className="red">User1234</span> 님
      </>
    ),
    bookmark: "찜목록",
    workspace: "작업실에 오신것을 환영합니다.",
  };
  const subTitle = {
    list: "여기에 설명 한줄 이정도 길이로 필요할것같습니다. 의견 부탁드립니다.",
    search: <input type="text" placeholder="검색어를 입력해주세요." />,
    support:
      "여기에 설명 한줄 이정도 길이로 필요할것같습니다. 의견 부탁드립니다.",
    mypage: "윗줄 포함 들어갈 문구 추천받습니다.",
    bookmark:
      "여기에 설명 한줄 이정도 길이로 필요할것같습니다. 의견 부탁드립니다.",
    workspace:
      "여기에 설명 한줄 이정도 길이로 필요할것같습니다. 의견 부탁드립니다.",
  };

  return (
    <div
      className={
        page === "mypage"
          ? "page_bn_wr flex_center  flex_top flex_col "
          : "page_bn_wr flex_center flex_col"
      }
    >
      <p className="bn_title_32">{title[page]}</p>
      <p
        style={page === "mypage" ? { color: "#717E93" } : null}
        className="bn_subtitle"
      >
        {subTitle[page]}
      </p>
      {page === "mypage" ? (
        <Link
          to={"/workspace"}
          className="flex_between"
          style={{
            position: "absolute",
            bottom: "24px",
            right: "25px",
            padding: "0 16px 0 20px ",
            width: "210px",
            height: "40px",
            borderRadius: "50px",
            border: "1px solid #292929",
            fontWeight: "600",
          }}
        >
          <span>KIT 제작하러 가기</span>
          <img src="/images/arrow2_ic.png" alt="화살표" />
        </Link>
      ) : null}
    </div>
  );
};
export default PageBanner;

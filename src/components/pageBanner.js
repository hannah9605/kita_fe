import React from "react";
// component

const PageBanner = ({ page }) => {
  const title = {
    list: "KIT 리스트",
    search: "검색",
    support: "고객지원",
  };
  const subTitle = {
    list: "여기에 설명 한줄 이정도 길이로 필요할것같습니다. 의견 부탁드립니다.",
    search: <input type="text" placeholder="검색어를 입력해주세요." />,
    support:
      "여기에 설명 한줄 이정도 길이로 필요할것같습니다. 의견 부탁드립니다.",
  };

  return (
    <div className="page_bn_wr flex_center flex_col">
      <p className="bn_title_32">{title[page]}</p>
      <p className="bn_subtitle">{subTitle[page]}</p>
    </div>
  );
};
export default PageBanner;

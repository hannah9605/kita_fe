import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// component
import PageBanner from "../../components/pageBanner";
import BoardList from "../../components/board/boardList";

export default function Support() {
  const location = useLocation();
  const { _tabIndex } = location.state || {};

  const [tabIndex, setTabIndex] = useState(_tabIndex ? _tabIndex : 0);
  const tabList = [
    { key: 0, title: "공지사항" },
    { key: 1, title: "FAQ" },
  ];

  const columns = [
    { title: "No.", key: "idx" },
    { title: "제목", key: "title", style: "left" },
    { title: "등록일", key: "reg_dt" },
  ];
  const noticeData = [
    {
      idx: 1,
      title: "제목이 들어갈 자리입니다.1",
      content: `내용이 들어갈 자리입니다.1 /n 공지사항 관련내용`,
      auth: "kita",
      reg_dt: "2024.05.12",
      id: 1000,
    },
    {
      idx: 2,
      title: "제목이 들어갈 자리입니다.2",

      reg_dt: "2024.05.12",
      id: 2000,
    },
    {
      idx: 3,
      title: "제목이 들어갈 자리입니다.3",
      reg_dt: "2024.05.12",
      id: 3000,
    },
    {
      idx: 4,
      title: "제목이 들어갈 자리입니다.4",
      reg_dt: "2024.05.12",
      id: 4000,
    },
    {
      idx: 5,
      title: "제목이 들어갈 자리입니다.5",
      reg_dt: "2024.05.12",
      id: 5000,
    },
    {
      idx: 6,
      title: "제목이 들어갈 자리입니다.6",
      reg_dt: "2024.05.12",
      id: 6000,
    },
    {
      idx: 7,
      title: "제목이 들어갈 자리입니다.7",
      reg_dt: "2024.05.12",
      id: 7000,
    },
    {
      idx: 8,
      title: "제목이 들어갈 자리입니다.8",
      reg_dt: "2024.05.12",
      id: 8000,
    },
  ];
  noticeData.sort((a, b) => b.idx - a.idx);
  //날짜순?
  // new Date(a.reg_dt) - new Date(b.reg_dt)
  let pageData = {
    pageName: "support",
    pageTab: tabList,
    tabIndex: tabIndex,
  };
  return (
    <div className=" layout" id="support">
      <div style={{ position: "relative" }}>
        <PageBanner page={"support"}></PageBanner>
        {/* 탭메뉴 */}
        <ul className="tab_box flex_center">
          {tabList?.map((tabItem) => {
            return (
              <li
                key={tabItem?.key}
                className={
                  tabItem?.key === tabIndex
                    ? "flex_center tab_item  active"
                    : "flex_center tab_item"
                }
                onClick={() => {
                  setTabIndex(tabItem?.key);
                }}
              >
                {tabItem?.title}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <BoardList columns={columns} data={noticeData} pageData={pageData} />
      </div>
    </div>
  );
}

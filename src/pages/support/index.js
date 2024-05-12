import { useState, useEffect } from "react";
// component
import PageBanner from "../../components/pageBanner";
import NoticeList from "./noticeList";
import style from "./support.module.css";

export default function Support() {
  const [tabIndex, setTabIndex] = useState(0);
  const tabList = [
    { key: 0, title: "공지사항" },
    { key: 1, title: "FAQ" },
  ];
  const columns = [
    { title: "No.", key: "num" },
    { title: "제목", key: "title", style: "left" },
    { title: "등록일", key: "reg_dt" },
  ];
  const noticeData = [
    {
      num: 1,
      title: "제목이 들어갈 자리입니다.1",
      content: "내용이 들어갈 자리입니다.1",
      auth: "kita",
      reg_dt: "2024.05.12",
      id: 1000,
    },
    {
      num: 2,
      title: "제목이 들어갈 자리입니다.2",

      reg_dt: "2024.05.12",
      id: 2000,
    },
    {
      num: 3,
      title: "제목이 들어갈 자리입니다.3",
      reg_dt: "2024.05.12",
      id: 3000,
    },
    {
      num: 4,
      title: "제목이 들어갈 자리입니다.4",
      reg_dt: "2024.05.12",
      id: 4000,
    },
    {
      num: 5,
      title: "제목이 들어갈 자리입니다.5",
      reg_dt: "2024.05.12",
      id: 5000,
    },
    {
      num: 6,
      title: "제목이 들어갈 자리입니다.6",
      reg_dt: "2024.05.12",
      id: 6000,
    },
    {
      num: 7,
      title: "제목이 들어갈 자리입니다.7",
      reg_dt: "2024.05.12",
      id: 7000,
    },
    {
      num: 8,
      title: "제목이 들어갈 자리입니다.8",
      reg_dt: "2024.05.12",
      id: 8000,
    },
  ];
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
        <NoticeList columns={columns} data={noticeData} />
      </div>
    </div>
  );
}

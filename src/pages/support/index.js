import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// component
import PageBanner from "../../components/pageBanner";
import BoardList from "../../components/board/boardList";

import axios from "axios";

export default function Support() {
  const location = useLocation();
  const { _tabIndex } = location.state || {};

  const [tabIndex, setTabIndex] = useState(_tabIndex ? _tabIndex : 0);
  const [noticeData, setNoticeData] = useState([]);
  const [faqData, setFaqData] = useState([]);
  const [showIndex, setShowIndex] = useState();
  const tabList = [
    { key: 0, title: "공지사항" },
    { key: 1, title: "FAQ" },
  ];

  const columns = [
    { title: "No.", key: "idx" },
    { title: "제목", key: "title", style: "left" },
    { title: "등록일", key: "reg_dt" },
  ];
  const getNoticeData = async () => {
    try {
      const res = await axios.get("/dummy/supportList.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      let resultData = res?.data?.noticeData;
      resultData.sort((a, b) => b.idx - a.idx);
      setNoticeData(resultData);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const getFaqData = async () => {
    try {
      const res = await axios.get("/dummy/faq.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      let resultData = res?.data?.faqData;

      setFaqData(resultData);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  //날짜순?
  // new Date(a.reg_dt) - new Date(b.reg_dt)
  let pageData = {
    pageName: "support",
    pageTab: tabList,
    tabIndex: tabIndex,
  };
  useEffect(() => {
    getNoticeData();
    getFaqData();
    setShowIndex();
  }, [tabIndex]);

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
        {tabIndex === 0 ? (
          <>
            <p className="menu_title">{tabList[tabIndex].title}</p>

            <BoardList
              columns={columns}
              data={noticeData}
              pageData={pageData}
            />
          </>
        ) : (
          <div>
            <p className="menu_title">{tabList[tabIndex].title}</p>
            <ul className="faq_list_wr">
              {faqData?.map((row, i) => {
                return (
                  <li
                    className="faq_list"
                    onClick={() => {
                      if (showIndex === i) {
                        setShowIndex();
                      } else {
                        setShowIndex(i);
                      }
                    }}
                  >
                    <p className="q_list flex_start">
                      <span className="bullet red">Q</span>
                      <p>{row?.question}</p>
                    </p>
                    {showIndex === i ? (
                      <p className="a_list flex_start flex_top ">
                        <span className=" bullet red">A</span>
                        <p>{row?.answer}</p>
                      </p>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

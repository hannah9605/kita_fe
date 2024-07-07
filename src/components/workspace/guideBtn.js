import React, { useState, useEffect } from "react";

import style from "../../pages/[...afterLogin]/workspace/workspace.module.css";

export default function GuideBtn() {
  const [showGuide, setShowGuide] = useState(true);

  const preventScroll = () => {
    const currentScrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${currentScrollY}px`; // 현재 스크롤 위치
    // document.body.style.overflowY = "scroll";
    return currentScrollY;
  };

  const allowScroll = (prevScrollY) => {
    document.body.style.position = "";
    document.body.style.width = "";
    document.body.style.top = "";
    document.body.style.overflowY = "";
    window.scrollTo(0, prevScrollY);
  };

  useEffect(() => {
    if (showGuide) {
      const prevScrollY = preventScroll();

      return () => {
        allowScroll(prevScrollY);
      };
    }
  }, [showGuide]);

  return (
    <>
      {showGuide && (
        <div className={style.guide_pop}>
          <div className={style.guide_pop_content}>
            <div>
              <p className="logo">
                KIT <span>: 작업실</span>
              </p>
              <p>
                KIT:작업실 가이드에
                <br /> 오신것을 환영합니다.
              </p>
              <p>작업실 사용방법에 대해서 알아보세요</p>
            </div>
            <div>
              <img src="/images/dark/guide_bg.png" alt="가이드 배경" />
            </div>
          </div>
          <div className={style.pop_btn_wr}>
            <button
              className={style.close_btn}
              onClick={() => {
                setShowGuide(false);
              }}
            >
              닫기
            </button>
          </div>
        </div>
      )}
      <div className={style.guide_btn}>
        <p>
          <span style={{ marginRight: "20px" }} className="red">
            필독
          </span>
          저작권 가이드라인을 확인하시겠습니까?
        </p>
        <button
          onClick={() => {
            setShowGuide(true);
          }}
          className="flex_between"
        >
          가이드라인 보러가기
          <div className={style.arrow_btn}>
            <img src="/images/dark/r_arrow_w.png" alt="" />
          </div>
        </button>
      </div>
    </>
  );
}

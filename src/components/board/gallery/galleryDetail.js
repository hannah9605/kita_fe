import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "./gallery.module.css";
import axios from "axios";

export default function GalleryDetail() {
  const location = useLocation();
  const navigate = useNavigate();

  const [tabIndex, settabIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  const { data, index, odd, returnState } = location.state || {}; // 나중에 post 로 활용가능 남겨둘것 !
  const [detailData, setDetailData] = useState();

  const getDetailData = async () => {
    await axios
      .get("/dummy/postDetail.json")
      .then((res) => {
        let resultData = res?.data?.postDetail;
        setDetailData(resultData);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  useEffect(() => {
    getDetailData();
  }, []);

  const renderArrowArea = (_data) => {
    if (_data) {
      const arrowArea = [
        { title: "개인적 사용", key: "individual" },
        { title: "비상업적 사용", key: "nonCommercial" },
        { title: "상업적 사용", key: "commerce" },
        { title: "수정 사용", key: "modify" },
      ];

      return (
        <>
          {arrowArea?.map((area) => (
            <span
              className={
                !detailData[area?.key] ? style.area_item : style.area_act_item
              }
              key={area?.key}
            >
              {area?.title}
            </span>
          ))}
        </>
      );
    }
  };
  if (!detailData) {
    return <div>Loading...</div>; // 데이터를 불러오는 동안 로딩 상태를 표시
  }

  return (
    <>
      <div className={style.gallery_wr} id="">
        <div className={style.head}>
          {stepIndex === 0 ? <></> : null}
          <Link to={"/KitList"}>
            <img
              style={{ marginRight: "25px" }}
              src="/images/arrow_index.png"
              alt=""
            />
            KIT: 리스트
          </Link>
        </div>
        <div className={style.gallery_box}>
          <div className={style.content_wr}></div>
        </div>
        <div className={style.side_bar_wr}>
          <ul>
            <li className={style.obj_tit_wr}>
              <p className={style.logo}>
                KIT <span>: TITLE</span>
              </p>
              <div className={style.obj_tit}>{detailData?.title}</div>
              <p>
                <span className="bookmark_num">{detailData?.steam}</span>
                <span className="view_num">{detailData?.view}</span>
              </p>
            </li>
            <li className="flex_between">
              <div className="flex_start font_16">
                <div className={style.profile_wr}>
                  <img src="/images/profile.png" alt="" />
                </div>
                {detailData?.auth}
              </div>
              <div className="btn_box">
                <button>
                  <img src="/images/bookmark-b.png" alt="" />
                </button>
                <button>
                  <img src="/images/share.png" alt="" />
                </button>
              </div>
            </li>
            {stepIndex === 0 ? (
              <>
                <li>
                  <div className={style.side_content_wr}>
                    <div className={style.side_tab}>
                      <span
                        onClick={() => {
                          settabIndex(0);
                        }}
                        className={tabIndex === 0 ? style.act : null}
                      >
                        KIT : Guide
                      </span>
                      <span
                        onClick={() => {
                          settabIndex(1);
                        }}
                        className={tabIndex === 1 ? style.act : null}
                      >
                        유의사항
                      </span>
                    </div>
                    <div className={style.side_content}>
                      {tabIndex === 0 ? <p>{detailData?.guide}</p> : <></>}
                    </div>
                  </div>
                </li>
                <li className={style.area_wr}>
                  <span> 허용범위</span>
                  {renderArrowArea(detailData)}
                </li>
                <li className="flex_center">
                  <button
                    onClick={() => {
                      setStepIndex(1);
                    }}
                  >
                    조립하기
                  </button>
                </li>
              </>
            ) : null}
          </ul>
        </div>
      </div>
    </>
  );
}

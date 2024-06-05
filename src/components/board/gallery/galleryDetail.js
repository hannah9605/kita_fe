import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "./gallery.module.css";

export default function GalleryDetail() {
  const location = useLocation();
  const navigate = useNavigate();

  const [tabIndex, settabIndex] = useState(0);

  const { data, index, odd, returnState } = location.state || {};
  let postData = data;
  const [detailData, setDetailData] = useState();

  useEffect(() => {
    let newDataDetail = {
      ...postData,
      individual: true,
      nonCommercial: true,
      commerce: true,
      modify: false,
    };
    setDetailData(newDataDetail);
  }, []);

  const arrowArea = [
    { title: "개인적 사용", key: "individual" },
    { title: "비상업적 사용", key: "nonCommercial" },
    { title: "상업적 사용", key: "commerce" },
    { title: "수정 사용", key: "modify" },
  ];
  return (
    <>
      <div className={style.gallery_wr} id="">
        <div className={style.head}>
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
                <span className="bookmark_num">125</span>
                <span className="view_num">382</span>
              </p>
            </li>
            <li className="flex_between">
              <div className="flex_start font_16">
                <div className={style.profile_wr}>
                  <img src="/images/profile.png" alt="" />
                </div>
                닉네임 123
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
                  <p>
                    Instagram : User_ID <br />
                    <br />
                    사용 시 반드시 출처를 표기해 주세요.
                    <br /> 금지 사항 : 상업적 이용 / 트레이싱 / 리터칭 / 가공 /
                    유튜브 / 스트리밍
                    <br /> 문의나 신고는 인스타그램 DM으로 부탁드립니다.
                    <br />
                    <br /> Please be sure to indicate the source when using
                    it.Banned: Commercial use / tracing / retouching /
                    processing / YouTube / streamingFor inquiries or reports,
                    please send us an Instagram DM.
                  </p>
                </div>
              </div>
            </li>
            <li className={style.area_wr}>
              <span> 허용범위</span>
              {arrowArea?.map((area) => (
                <span
                  className={
                    !detailData[area.key]
                      ? style.area_item
                      : style.area_act_item
                  }
                  key={area.key}
                >
                  {area?.title}
                </span>
              ))}
            </li>
            <li className="flex_center">
              <button onclick={() => {}}>조립하기</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

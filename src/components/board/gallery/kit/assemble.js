import React, { useState, useEffect } from "react";
import style from "../gallery.module.css";
import axios from "axios";

export default function Assemble({
  detailData,
  setStepIndex,
  kitItemData,
  setSelectItem,
  selectItem,
}) {
  let itemKit = kitItemData?.itemKit;
  const [itemKitIndex, setItemKitIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);

  let itemList = itemKit[itemKitIndex].itemList;
  let itemType = itemList[itemIndex].type;

  const getImageOverlay = () => {
    let init = [];
    itemKit.map((item) => {
      init.push(item?.itemList[0]?.type[0]?.source);
    });
    setSelectItem(init);
  };
  // 초기 이미지 로드
  useEffect(() => {
    getImageOverlay();
  }, []);
  return (
    <>
      <div className="flex_start">
        <h4>타입</h4>
        <ul className="flex_start">
          {itemType?.map((type, index) => {
            return <li style={{ background: `${type?.color}` }}>dd</li>;
          })}
        </ul>
      </div>
      <div className="flex_between">
        <div>
          {itemKit?.map((kit, i) => {
            return (
              <div
                onClick={() => {
                  setItemKitIndex(i);
                }}
              >
                <img src={kit?.source} />
                <p>{kit?.title}</p>
              </div>
            );
          })}
        </div>
        <div>
          {itemList?.map((row, index) => {
            return (
              <div
                onClick={() => {
                  setItemIndex(index);
                }}
              >
                <img src={row?.source} />
                <p>{row?.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <ul className={style.intro_wr}>
        {/* 제목 */}

        <li className="flex_center">
          <button
            onClick={() => {
              setStepIndex(2);
            }}
          >
            완성하기
          </button>
        </li>
      </ul>
    </>
  );
}

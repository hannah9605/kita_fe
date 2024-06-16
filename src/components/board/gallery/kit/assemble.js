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

  let itemList = itemKit[itemKitIndex]?.itemList;
  let itemType = itemList[itemIndex]?.type;

  const getImageOverlay = () => {
    let init = [];
    itemKit.map((item) => {
      console.log(item, "inite");
      let temp = { id: item?.title, src: item?.itemList[0]?.type[0]?.source };
      init.push(temp);
    });
    setSelectItem(init);
  };

  const changeImageSrc = (_type) => {
    if (selectItem.lenght !== 0) {
      const changeSelectItem = [...selectItem];
      changeSelectItem?.map((rowItem) => {
        if (rowItem?.id === itemKit[itemKitIndex]?.title) {
          return (rowItem.src = _type?.source);
        }
        return rowItem;
      });
      setSelectItem(changeSelectItem);
      console.log(itemKit[itemKitIndex], "??", _type, changeSelectItem);
    }
  };
  // 초기 이미지 로드
  useEffect(() => {
    getImageOverlay();
  }, []);
  return (
    <div className={style.assemble_wr}>
      <div className={style.type_content}>
        <h4>타입</h4>
        <ul className="flex_start">
          {itemType?.map((type, index) => {
            return (
              <li
                className={style.type_item}
                style={{
                  background: `${type?.color}`,
                }}
                onClick={() => {
                  changeImageSrc(type);
                }}
              ></li>
            );
          })}
        </ul>
      </div>
      <div className="flex_between flex_top">
        <div className={style.kit_content}>
          <h4>아이템키트</h4>
          {itemKit?.map((kit, i) => {
            return (
              <div
                onClick={() => {
                  setItemKitIndex(i);
                }}
              >
                <img src={kit?.source} />
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
      <ul>
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
    </div>
  );
}

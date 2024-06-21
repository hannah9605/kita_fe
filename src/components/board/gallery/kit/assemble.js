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
  const [itemKitIndex, setItemKitIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  // const [itemList, setItemList] = useState();
  // const [itemType, setItemType] = useState();

  let itemKit = kitItemData?.itemKit || [];
  let itemList = itemKit[itemKitIndex]?.itemList || [];
  let itemType = itemList[itemIndex]?.type || [];

  const getImageOverlay = () => {
    let init = [];
    itemKit?.map((item) => {
      console.log(item, "inite");
      let temp = {
        id: item?.title,
        group: item?.itemList[0]?.title,
        src: item?.itemList[0]?.type[0]?.source,
      };
      init.push(temp);
    });
    setSelectItem(init);
  };

  const changeImageSrc = (_type) => {
    if (selectItem.lenght !== 0) {
      const changeSelectItem = [...selectItem];
      changeSelectItem?.map((rowItem) => {
        if (rowItem?.id === itemKit[itemKitIndex]?.title) {
          rowItem.src = _type?.source;
          rowItem.group = itemList[itemIndex]?.title;
          return rowItem;
        }
        return rowItem;
      });
      setSelectItem(changeSelectItem);
      console.log(changeSelectItem, itemList);
    }
  };
  // 초기 이미지 로드
  useEffect(() => {
    getImageOverlay();
  }, []);

  // useEffect(() => {
  //   if (itemKit.lenght > 0) {
  //     setItemList(itemKit[itemKitIndex]?.itemList);
  //   }
  // }, [itemKitIndex]);
  // useEffect(() => {
  //   if (itemKit.lenght > 0) {
  //     setItemType(itemList[itemIndex]?.type);
  //   }
  // }, [itemIndex]);

  return (
    <div className={style.assemble_wr}>
      <div className={style.type_content}>
        <h4>타입</h4>
        <div className={style.type_list_wr}>
          <ul className="flex_start">
            {itemType?.map((type, index) => {
              return (
                <li
                  className={
                    selectItem.some((item) => item.src === type.source)
                      ? `${style.type_item} ${style.act_item}`
                      : style.type_item
                  }
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
      </div>
      <div style={{ flexGrow: "1" }} className="flex_between flex_top">
        <div className={style.kit_content}>
          <h4>아이템키트</h4>
          {itemKit?.map((kit, i) => {
            return (
              <div
                key={i}
                className={
                  itemKitIndex === i
                    ? `${style.kit_content_item} ${style.act_item}`
                    : style.kit_content_item
                }
                onClick={() => {
                  setItemKitIndex(i);
                  // selectItem
                  // 선택된 아이템 정보 불러오기

                  let itemListTemp = itemKit[i]?.itemList;
                  selectItem?.map((select) => {
                    let selected = itemListTemp.some((item, index) => {
                      console.log(item, select, "dd");

                      if (item?.title === select?.group) {
                        console.log("일치", item, select);
                        setItemIndex(index);
                      }
                    });
                  });

                  // itemListTemp.some((item) => item?.itemList?.map((item) => {
                  //   item?.=== type.source
                  // }) );

                  console.log(itemKitIndex, itemList);
                }}
              >
                <img src={kit?.source} />
              </div>
            );
          })}
        </div>
        <div className={style.kit_item_content_wr}>
          <h4>아이템</h4>

          <div className={style.kit_item_content}>
            {itemList?.map((row, index) => {
              return (
                <div
                  className={
                    itemIndex === index
                      ? `${style.kit_item} ${style.act_item}`
                      : style.kit_item
                  }
                  onClick={() => {
                    setItemIndex(index);
                    changeImageSrc(itemList[index]?.type[0]);
                  }}
                >
                  <img src={row?.source} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={style.assemble_btn}>
        <button
          onClick={() => {
            setStepIndex(2);
          }}
        >
          완성하기
        </button>
      </div>
    </div>
  );
}

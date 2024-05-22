import React from "react";
import { useNavigate } from "react-router-dom";

const PhotoTable = ({ data, loading }) => {
  const navigate = useNavigate();

  const getPost = (item, i, _odd) => {
    navigate(`/post/${item?.id}`, {
      replace: false,
      state: { data: item, index: i, odd: _odd },
    });
  };

  return (
    <>
      {/* {loading && <div> loading... </div>} */}
      <ul className="flex_between kit_list">
        {data?.map((item, i) => {
          return (
            <li key={`${item.id}`}>
              <div style={{ position: "relative" }}>
                <div
                  className="thumb_img_wr"
                  onClick={() => {
                    getPost(item, i, data);
                  }}
                >
                  <img src={item?.thumbnail} alt="썸네일이미지" />
                </div>
                <button
                  onClick={() => {
                    alert("서비스가준비중입니다.");
                    //  api요청으로 scrap정보를 전해야 할까?
                  }}
                  className="thumb_bookmark"
                  alt="북마크"
                >
                  {item?.bookmark ? (
                    <img src="/images/bookmark_act.png" alt="bookmark_act" />
                  ) : (
                    <img src="/images/thumb_bookmark.png" alt="bookmark" />
                  )}
                </button>
              </div>
              <p className="kit_title">{item?.title}</p>
              <p className="kit_auth">{item?.auth}</p>
              <div>
                <span className="bookmark_num">{item?.steam}</span>
                <span className="view_num">{item?.view}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default PhotoTable;

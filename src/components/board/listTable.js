import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./boardList.module.css";

const ListTable = ({ posts, columns, pageData, loading }) => {
  const navigate = useNavigate();

  const getPost = (item, i, _odd) => {
    let oddList = { data: _odd, ...pageData };
    navigate(`/board/${item?.id}`, {
      replace: false,
      state: { data: item, index: i, odd: oddList },
    });
  };

  return (
    <>
      {/* {loading && <div> loading... </div>} */}
      <table className={style.list_table}>
        <thead>
          <tr>
            {columns?.map((head, i) => (
              <th
                style={
                  head.style === "left"
                    ? { textAlign: "left" }
                    : { textAlign: "center" }
                }
                key={head?.key}
                className={i === 0 ? "red" : null}
              >
                {head?.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {posts?.map((_data, i) => {
            return (
              <tr
                onClick={() => {
                  getPost(_data, i, posts);
                }}
              >
                {columns?.map((head, i) => (
                  <td
                    className={i === 0 ? "red" : null}
                    style={
                      head.style === "left"
                        ? { textAlign: "left" }
                        : { textAlign: "center" }
                    }
                  >
                    {_data[head?.key] ? _data[head?.key] : null}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default ListTable;

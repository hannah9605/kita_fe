import { useNavigate } from "react-router-dom";
import style from "./support.module.css";

export default function NoticeList({ columns, data }) {
  const navigate = useNavigate();

  const getPost = (item, i) => {
    navigate(`/board/${item?.id}`, { replace: true, state: { data: item } });
  };
  return (
    <div className={style.list_table_wr}>
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
          {data?.map((_data, i) => {
            return (
              <tr
                onClick={() => {
                  getPost(_data, i);
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
    </div>
  );
}

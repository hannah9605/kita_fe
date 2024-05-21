import style from "./board.module.css";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // const getPaginationGroup = () => {
  //   const start = Math.max(1, currentPage - 2);
  //   const end = Math.min(pageNumbers.length, currentPage + 2);
  //   const group = [];
  //   for (let i = start; i <= end; i++) {
  //     group.push(i);
  //   }
  //   return group;
  // };
  const getPaginationGroup = () => {
    const groupSize = 5;
    const groupIndex = Math.floor((currentPage - 1) / groupSize);
    const start = groupIndex * groupSize + 1;
    const end = Math.min(start + groupSize - 1, pageNumbers.length);
    const group = [];
    for (let i = start; i <= end; i++) {
      group.push(i);
    }
    return group;
  };

  const paginationGroup = getPaginationGroup();

  return (
    <div>
      <ul className={style.pagination}>
        <li
          className={
            currentPage === 1
              ? `${style.page_item} ${style.noclick}`
              : style.page_item
          }
          onClick={() => {
            if (currentPage !== 1) {
              paginate(1);
            }
          }}
        >
          <svg width="19" height="13" fill="none">
            <path
              d="M6.75 6.933a.5.5 0 0 1 0-.866L15 1.304a.5.5 0 0 1 .75.433v9.526a.5.5 0 0 1-.75.433L6.75 6.933z"
              fill="#D7DCE4"
            />
            <path
              d="M.75 6.933a.5.5 0 0 1 0-.866L9 1.304a.5.5 0 0 1 .75.433v9.526a.5.5 0 0 1-.75.433L.75 6.933z"
              fill="#D7DCE4"
            />
          </svg>
        </li>

        <li
          className={
            currentPage === 1
              ? `${style.page_item} ${style.noclick}`
              : style.page_item
          }
          onClick={() => {
            if (currentPage !== 1) {
              paginate(currentPage - 1);
            }
          }}
        >
          <svg width="10" height="11" fill="none">
            <path
              d="M.75 5.933a.5.5 0 0 1 0-.866L9 .304a.5.5 0 0 1 .75.433v9.526a.5.5 0 0 1-.75.433L.75 5.933z"
              fill={currentPage === 1 ? "#D7DCE4" : "#F02941"}
            />
          </svg>
        </li>

        {paginationGroup.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={
              currentPage === number
                ? `${style.page_item} ${style.active}`
                : style.page_item
            }
          >
            <span className={style.page_link}>{number}</span>
          </li>
        ))}

        <li
          className={
            currentPage === pageNumbers?.length
              ? `${style.page_item} ${style.noclick}`
              : style.page_item
          }
          onClick={() => {
            if (currentPage !== pageNumbers?.length) {
              paginate(currentPage + 1);
            }
          }}
        >
          <svg width="10" height="11" fill="none">
            <path
              d="M9.25 5.067a.5.5 0 0 1 0 .866L1 10.696a.5.5 0 0 1-.75-.433V.737A.5.5 0 0 1 1 .304l8.25 4.763z"
              fill={currentPage === pageNumbers?.length ? "#D7DCE4" : "#F02941"}
            />
          </svg>
        </li>

        <li
          className={
            currentPage === pageNumbers?.length
              ? `${style.page_item} ${style.noclick}`
              : style.page_item
          }
          onClick={() => {
            if (currentPage !== pageNumbers?.length) {
              paginate(pageNumbers?.length);
            }
          }}
        >
          <svg width="19" height="13" fill="none">
            <path
              d="M12.25 6.067a.5.5 0 0 1 0 .866L4 11.696a.5.5 0 0 1-.75-.433V1.737A.5.5 0 0 1 4 1.304l8.25 4.763z"
              fill="#D7DCE4"
            />
            <path
              d="M18.25 6.067a.5.5 0 0 1 0 .866L10 11.696a.5.5 0 0 1-.75-.433V1.737a.5.5 0 0 1 .75-.433l8.25 4.763z"
              fill="#D7DCE4"
            />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

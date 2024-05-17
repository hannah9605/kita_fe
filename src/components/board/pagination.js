const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="pagination flex_center">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              currentPage === number ? "page_item active" : "page_item"
            }
          >
            <span onClick={() => paginate(number)} className="page_link">
              {number}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;

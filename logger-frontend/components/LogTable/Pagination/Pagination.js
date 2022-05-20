import { useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";

export default function Pagination({ currentItems, setPage, total }) {
  const [pageCount, setPageCount] = useState(20);
  const handlePageClick = (e) => setPage(e.selected);
  return (
    <div style={{ width: "100%" }}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={total}
        activeClassName={styles.active}
        className={styles.paginate}
        pageLinkClassName={styles.pageLink}
        previousClassName={styles.pageItem}
        previousLinkClassName={styles.pageLink}
        nextClassName={styles.pageItem}
        nextLinkClassName={styles.pageLink}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

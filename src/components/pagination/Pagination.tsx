import style from "./Pagination.module.scss";

import React, {FC} from 'react';
import ReactPaginate from "react-paginate";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";
import {selectCurrentPage, setPagination} from "../../store/redusers/search/FilterSlice.ts";

const Pagination: FC = () => {

  const dispatch = useAppDispatch()
  const currentPage = useAppSelector(selectCurrentPage)

  return (
      <ReactPaginate
          className={style.root}
          breakLabel="..."
          nextLabel=">"
          onPageChange={(event)=> dispatch(setPagination(event.selected + 1))  }
          pageRangeDisplayed={4}
          pageCount={3}
          previousLabel="<"
          forcePage={currentPage - 1}
          renderOnZeroPageCount={null}
      />
  );
};

export default Pagination;
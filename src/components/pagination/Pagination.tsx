import style from "./Pagination.module.scss";

import React, {FC} from 'react';
import ReactPaginate from "react-paginate";
import {useAppDispatch} from "../../hooks/redux.ts";
import {setPagination} from "../../store/redusers/search/FilterSlice.ts";

const Pagination: FC = () => {

  const dispatch = useAppDispatch()

  return (
      <ReactPaginate
          className={style.root}
          breakLabel="..."
          nextLabel=">"
          onPageChange={(event)=> dispatch(setPagination(event.selected + 1))  }
          pageRangeDisplayed={4}
          pageCount={3}
          previousLabel="<"
          renderOnZeroPageCount={null}
      />
  );
};

export default Pagination;
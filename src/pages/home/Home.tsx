import React, {FC, useCallback, useEffect, useRef, useState} from 'react';

import Categories from "../../components/categories/Categories.tsx";
import Sort, {sortList} from "../../components/sort/Sort.tsx";
import SkeletonPizza from "../../components/pizza/SkeletonPizza.tsx";
import PizzaBlock from "../../components/pizza/PizzaBlock.tsx";
import Pagination from "../../components/pagination/Pagination.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";
import qs from "qs"
import {useNavigate} from "react-router-dom";
import {setCategoryId, setFilters, setPagination} from "../../store/redusers/search/FilterSlice.ts";
import {fetchPizzas} from "../../store/redusers/pizza/ActionCreators.ts";
import {selectCurrentPage, selectSortBy} from "../../store/redusers/search/Selectors.ts";

const Home: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const searchValue = useAppSelector(state => state.searchReducer.query);
  const { sort, name } = useAppSelector(selectSortBy);
  const currentPage = useAppSelector(selectCurrentPage);
  const categoryId = useAppSelector(state => state.searchReducer.categoryId);
  const items = useAppSelector(state => state.pizzaReducer.pizzas)

  const isError = useAppSelector(state => state.pizzaReducer.error)
  const isLoading = useAppSelector(state => state.pizzaReducer.isLoading)
  const [isFiltersLoaded, setIsFiltersLoaded] = useState(false);

  const onChangeCategory = useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find((obj) => obj.sort === params.sortBy);

      dispatch(setFilters({ ...params, sort }));

      isSearch.current = true;
    }
    setIsFiltersLoaded(true)
  }, []);

  const getPizzas = async () => {
    const category = Number(categoryId) === 0 ? "" : `category=${categoryId}&`;
    const sortProperty = sort.includes('-') ? `sortBy=${sort.substring(1)}&order=asc` : `sortBy=${sort}&order=desc`

    dispatch(fetchPizzas({category, sortProperty, currentPage}))

    window.scrollTo(0, 0)
  };

  useEffect(() => {
    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current = false;
  }, [categoryId, sort, currentPage]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        category: categoryId,
        sortBy: sort.includes('-') ? `${sort.substring(1)}` : `${sort}`,
        page: currentPage,
        limit: 4,
        order: sort.includes('-') ? `asc` : `desc`,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort, currentPage]);

  const skeletons = [...new Array(6)].map((_, index) => <SkeletonPizza key={index} />);
  const pizzas = items
      .filter((obj) => {
        if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
          return true;
        }
        return false;
      })
      .map((pizza) => <PizzaBlock key={pizza.title} pizza={pizza} />);

  useEffect(() => {
    if (pizzas.length === 0) {
      dispatch(setPagination(1));
    }
  }, [pizzas, dispatch]);

  return (
      <>
        <div className="content__top">
          {isFiltersLoaded && <Categories categoryId={categoryId} onChangeCategory={onChangeCategory}/>}
          <Sort name={name}/>
        </div>
        <h2 className="content__title">Всі піци</h2>
        <div className="content__items">
          {isError
              ? <h1>{isError}</h1>
              : isLoading ? skeletons : pizzas}
        </div>
        {items.length === 8 && <Pagination/>}
      </>
  );
};

export default Home;
import React, {useEffect, useRef, useState} from 'react';

import Categories from "../../components/categories/Categories.tsx";
import Sort, {sortList} from "../../components/sort/Sort.tsx";
import SkeletonPizza from "../../components/pizza/SkeletonPizza.tsx";
import PizzaBlock from "../../components/pizza/PizzaBlock.tsx";
import Pagination from "../../components/pagination/Pagination.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";
import axios from "axios";
import qs from "qs"
import {useNavigate} from "react-router-dom";
import {setCategoryId, setFilters} from "../../store/redusers/search/FilterSlice.ts";
import {addPizza} from "../../store/redusers/pizza/PizzaSlice.ts";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const searchValue = useAppSelector(state => state.searchReducer.query);
  const { sort } = useAppSelector(state => state.searchReducer.sortBy);
  const currentPage = useAppSelector(state => state.searchReducer.pagination);
  const categoryId = useAppSelector(state => state.searchReducer.categoryId);

  const items = useAppSelector(state => state.pizzaReducer.pizzas)
  // const [items, setItems] = useState<IPizza[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFiltersLoaded, setIsFiltersLoaded] = useState(false);
  const category = Number(categoryId) === 0 ? "" : `category=${categoryId}&`;
  const sortProperty = sort.includes('-') ? `sortBy=${sort.substring(1)}&order=asc` : `sortBy=${sort}&order=desc`

  const onChangeCategory = React.useCallback((idx: number) => {
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

  const fetchPizza = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
          `https://66b0c0f36a693a95b53a107f.mockapi.io/items?page=${currentPage}&limit=4&${category}${sortProperty}`
      );
      dispatch(addPizza(response.data));
    } catch (error) {
      alert("Помилка при отриманні піци");
      console.log("Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isSearch.current) {
      fetchPizza();
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

  return (
      <>
        <div className="content__top">
          {isFiltersLoaded && <Categories categoryId={categoryId} onChangeCategory={onChangeCategory}/>}
          <Sort />
        </div>
        <h2 className="content__title">Всі піци</h2>
        <div className="content__items">{isLoading ? skeletons : pizzas}</div>
        <Pagination />
      </>
  );
};

export default Home;
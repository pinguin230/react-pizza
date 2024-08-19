import React, {useContext, useEffect, useState} from 'react';

import Categories from "../../components/categories/Categories.tsx";
import Sort from "../../components/sort/Sort.tsx";
import SkeletonPizza from "../../components/pizza/SkeletonPizza.tsx";
import PizzaBlock, {IPizza} from "../../components/pizza/PizzaBlock.tsx";
import Pagination from "../../components/pagination/Pagination.tsx";
import {useAppSelector} from "../../hooks/redux.ts";
import axios from "axios";

const Home = () => {

  const searchValue = useAppSelector(state => state.searchReducer.query)
  const {sort} = useAppSelector(state => state.searchReducer.sortBy)
  const currentPage = useAppSelector(state => state.searchReducer.pagination)

  const [items, setItems] = useState<IPizza[]>([])
  const [categoryId, setCategoryId] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const category = categoryId ? `category=${categoryId}&` : ""


  const fetchPizza = async () => {
    setIsLoading(true)

    const response = await axios.get(`https://66b0c0f36a693a95b53a107f.mockapi.io/items?page=${currentPage}&limit=12&${category}sortBy=${sort}&order=desc`)
    setItems(response.data)
    setIsLoading(false)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchPizza()
  }, [categoryId, sort, currentPage]);

  const skeletons = [...new Array(6)].map((_, index) => <SkeletonPizza key={index}/>)
  const pizzas = items.filter((obj) => {
        if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
          return true
        }
        return false
      }
  ).map((pizza) => <PizzaBlock key={pizza.title} pizza={pizza}/>)

  return (
      <>
        <div className="content__top">
          <Categories categoryId={categoryId} setCategoryId={setCategoryId}/>
          <Sort/>
        </div>
        <h2 className="content__title">Всі піци</h2>
        <div className="content__items">
          {isLoading ? skeletons : pizzas}
        </div>
        <Pagination/>
      </>
  );
};

export default Home;
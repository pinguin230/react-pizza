import {FC, memo, useEffect, useRef, useState} from "react";
import {useAppDispatch} from "../../hooks/redux.ts";
import {setSortBy} from "../../store/redusers/search/FilterSlice.ts";
import IFilter from "../../store/redusers/search/IFilter.ts";

export const sortList: Array<IFilter["sortBy"]> = [
  {name: "популярності (DESC)", sort: "rating"},
  {name: "популярності (ASC)", sort: "-rating"},
  {name: "ціна (DESC)", sort: "price"},
  {name: "ціна (ASC)", sort: "-price"},
  {name: "алфавіту (DESC)", sort: "title"},
  {name: "алфавіту (ASC)", sort: "-title"}
]

interface SortProps {
  name: string;
}

const Sort: FC<SortProps> = memo(({name}) => {

  const dispatch = useAppDispatch()
  const [isVisible, setIsVisible] = useState(false)
  const sortRef = useRef(null)

  const handleChangeActiveItem = (index: number) => {
    dispatch(setSortBy(sortList[index]))
    setIsVisible(false)
  }

  useEffect(() => {

    const handleClickOutside = (event: MouseEvent)=>{
      if(!event.composedPath().includes(sortRef.current)){
        setIsVisible(false)
      }
    }

    document.body.addEventListener('click', handleClickOutside)

    return () => {
      document.body.removeEventListener('click', handleClickOutside)
    }
  }, []);

  return (
      <div ref={sortRef} className="sort">
        <div className="sort__label">
          <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                fill="#2C2C2C"
            />
          </svg>
          <b>Сортувати по:</b>
          <span onClick={() => setIsVisible(!isVisible)}>{name}</span>
        </div>
        {isVisible &&
          <div className="sort__popup">
            <ul>
              {sortList.map((item, index) =>
                  <li key={index} className={name === sortList[index].name ? "active" : ""}
                      onClick={() => handleChangeActiveItem(index)}>
                    {item.name}
                  </li>
              )}
            </ul>
          </div>
        }


      </div>
  );
});

export default Sort;
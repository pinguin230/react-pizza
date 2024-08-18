import {FC, useState} from "react";

interface CategoriesProps {
  categoryId: number;
  setCategoryId: (id: number) => void;

}

const Categories: FC <CategoriesProps>  = ({categoryId, setCategoryId }) => {

  const categories: string[] = ["Всі", "Мясні", "Вегетиріанські", "Гриль", "Гострі", "Закриті"]

  const handleCategoryClick = (index:number) => {
    console.log(index)
    setCategoryId(index)
  }

  return (
      <div className="categories">
        <ul>
          {categories.map((category: string, index: number) =>
              <li
                  key={index}
                  className={categoryId === index ? 'active' : ''}
                  onClick={() => handleCategoryClick(index)}
              >
                {category}
              </li>)
          }
        </ul>
      </div>
  );
};

export default Categories;
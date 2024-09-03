import {FC, memo, useMemo} from "react";


interface CategoriesProps {
  categoryId: number;
  onChangeCategory: (idx: number) => void
}

const Categories: FC<CategoriesProps> = memo(({ categoryId, onChangeCategory }) => {
  const categories: string[] = useMemo(() => ["Всі", "Мясні", "Вегетиріанські", "Гриль", "Гострі", "Закриті"], []);


  return (
      <div className="categories">
        <ul>
          {categories.map((category: string, index: number) => {
            return (
                <li
                    key={index}
                    className={index === Number(categoryId) ? 'active' : ''}
                    onClick={() => onChangeCategory(index)}
                >
                  {category}
                </li>
            );
          })}
        </ul>
      </div>
  );
});

export default Categories;
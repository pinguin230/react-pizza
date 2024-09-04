import {FC, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";
import {addItem} from "../../store/redusers/basket/BasketSlice.ts";
import {IPizzaItem} from "../../store/redusers/pizza/IPizza.ts";
import {Link} from "react-router-dom";
import {selectPizzaItemById} from "../../store/redusers/basket/Selectors.ts";

const PizzaBlock: FC<{ pizza: IPizzaItem }> = ({pizza}) => {

  const dispatch = useAppDispatch()
  const obj = useAppSelector(selectPizzaItemById(pizza.id))
  const count: number = obj ? obj.count : 0
  const [activeSize, setActiveSize] = useState(0)
  const [activeType, setActiveType] = useState(0)
  const typeNames = ["тонка", "традиційна"]


  const onClickAdd = () => {
    const updatedPizza = {
      id: pizza.id,
      title: pizza.title,
      imageUrl: pizza.imageUrl,
      price: pizza.price,
      size: `${pizza.sizes[activeSize]} см`,
      type: typeNames[activeType]
    };

    dispatch(addItem(updatedPizza))
  }

  return (
      <div className="pizza-block-wrapper">
        <div className="pizza-block">
          <Link to={`pizza/${pizza.id}`}>
            <img
                className="pizza-block__image"
                src={pizza.imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{pizza.title}</h4>
          </Link>
          <div className="pizza-block__selector">
            <ul>
              {pizza.types.map((type, index) =>
                  <li
                      key={type}
                      className={activeType === index ? "active" : ""}
                      onClick={() => setActiveType(type)}
                  >
                    {type ? typeNames[type] : typeNames[type]}
                  </li>
              )}
            </ul>
            <ul>
              {pizza.sizes.map((size, index) =>
                  <li key={size}
                      onClick={() => setActiveSize(index)}
                      className={activeSize === index ? 'active' : ""}
                  >
                    {size} см.
                  </li>
              )}
            </ul>
          </div>
          <div className="pizza-block__bottom">
            <div className="pizza-block__price">від {pizza.price} грн</div>
            <button onClick={onClickAdd} className="button button--outline button--add">
              <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                    fill="white"
                />
              </svg>
              <span>Добавити</span>
              {count > 0 && <i>{count}</i>}
            </button>
          </div>
        </div>
      </div>

  );
};

export default PizzaBlock;
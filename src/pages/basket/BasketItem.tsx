import React from 'react';
import {decreaseItem, deleteItem, increaseItem} from "../../store/redusers/basket/BasketSlice.ts";
import {useAppDispatch} from "../../hooks/redux.ts";
import {IBasketItem} from "../../store/redusers/basket/IBasket.ts";

const BasketItem = ({items}) => {

  const dispatch = useAppDispatch()
  const handleDeleteItem = (id: number) => {

    if (window.confirm("Ти дійсно хочеш видалити цю піцу?")) {
      dispatch(deleteItem(id))
    }
  }

  return (
      <>
        {items ? items.map((pizza: IBasketItem) => (
            <div key={pizza.id} className="content__items">
              <div className="cart__item">
                <div className="cart__item-img">
                  <img className="pizza-block__image"
                       src={pizza.imageUrl}
                       alt="Pizza"/>
                </div>
                <div className="cart__item-info">
                  <h3>{pizza.title}</h3>
                  <p>{pizza.type.slice(0, -1)}e тісто, {pizza.size}.</p>
                </div>
                <div className="cart__item-count">
                  <button onClick={() => dispatch(decreaseItem(pizza.id))}
                          className="button button--outline button--circle cart__item-count-minus">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                          fill="#EB5A1E"></path>
                      <path
                          d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                          fill="#EB5A1E"></path>
                    </svg>

                  </button>
                  <b>{pizza.count}</b>
                  <button onClick={() => dispatch(increaseItem(pizza.id))}
                          className="button button--outline button--circle cart__item-count-plus">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                          fill="#EB5A1E"></path>
                      <path
                          d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                          fill="#EB5A1E"></path>
                    </svg>

                  </button>
                </div>
                <div className="cart__item-price">
                  <b>{pizza.price * pizza.count} ₴</b>
                </div>
                <div className="cart__item-remove">
                  <button onClick={() => handleDeleteItem(pizza.id)} className="button button--outline button--circle">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                          fill="#EB5A1E"></path>
                      <path
                          d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                          fill="#EB5A1E"></path>
                    </svg>

                  </button>
                </div>
              </div>


            </div>
        )) : <h1>Піци нема</h1>}
      </>
  );
};

export default BasketItem;
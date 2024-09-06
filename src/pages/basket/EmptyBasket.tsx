import React, {FC} from 'react';

import cartEmptyImg from "../../assets/img/empty-cart.png"
import {Link} from "react-router-dom";

const EmptyBasket: FC = () => {
  return (
      <div className="container container--cart">
        <div className="cart cart--empty">
          <h2>Корзина пуста 😕</h2>
          <p>
            Скоріш за все, ви не замовляли ще піцу. <br/>
            Для того, щоб замовити піцу, перейди на головну сторінку.
          </p>
          <img src={cartEmptyImg} alt="Empty cart"/>
          <Link to="/" className="button button--black">
            <span>Повернутися на головну</span>
          </Link>
        </div>
      </div>
  );
};

export default EmptyBasket;
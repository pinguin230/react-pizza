import React from 'react';
import style from "./ErrorPage.module.scss";
import {Link, Outlet} from "react-router-dom";
import Header from "../../components/header/Header.tsx";

const ErrorPage = () => {
  return (
      <div className="wrapper">
        <Header/>
        <div className="content">
          <div className="container">
            <div className={style.root}>
              <span>😕</span><br/>
              <h1>Нічого не знайдено...</h1>

              <p className={style.description}>На жаль, такої сторінки не існує в нашому інтернет магазині</p>

              <Link to="/" className={style.link}>
                <button className={style.button}>Повернутися на головну</button>
              </Link>

            </div>
          </div>
        </div>
      </div>

  );
};

export default ErrorPage;
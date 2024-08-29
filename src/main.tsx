import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import ErrorPage from "./pages/error/ErrorPage.tsx";
import BasketPage from "./pages/basket/BasketPage.tsx";
import {Provider} from "react-redux";
import store from "./store/store.ts";
import FullPizzaPage from "./pages/pizza-page/FullPizzaPage.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {path: '/', element: <Home/>},
      {path: '/basket', element: <BasketPage/>,},
      {path: '/pizza/:id', element: <FullPizzaPage/>},
      // {path: '*', element: <NotFoundPage/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    // </React.StrictMode>,
)

import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import {Provider} from "react-redux";
import store from "./store/store.ts";

const BasketPage = lazy(() => import( /* webpackChunkName: "BasketPage" */ "./pages/basket/BasketPage.tsx"));
const ErrorPage = lazy(() => import( /* webpackChunkName: "ErrorPage" */ "./pages/error/ErrorPage.tsx"));
const FullPizzaPage = lazy(() => import(/* webpackChunkName: "FullPizzaPage" */ "./pages/pizza-page/FullPizzaPage.tsx"));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement:
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorPage/>
        </Suspense>,
    children: [
      {
        path: '/', element: <Home/>
      },
      {
        path: '/basket', element:
            <Suspense fallback={<div>Loading...</div>}>
              <BasketPage/>
            </Suspense>
      },
      {
        path: '/pizza/:id', element:
            <Suspense fallback={<div>Loading...</div>}>
              <FullPizzaPage/>
            </Suspense>
      },
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

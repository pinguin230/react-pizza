import './App.css'
import "./scss/app.scss"
import Header from "./components/header/Header.tsx";
import {Outlet  } from "react-router-dom";

function App() {


  return (
      <>
        <div className="wrapper">
            <Header/>
            <div className="content">
              <div className="container">
                <Outlet/>
              </div>
            </div>
        </div>
      </>
  )
}
export default App

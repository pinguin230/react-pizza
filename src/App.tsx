import './App.css'
import "./scss/app.scss"
import Header from "./components/header/Header.tsx";
import Categories from "./components/categories/Categories.tsx";
import Sort from "./components/sort/Sort.tsx";
import PizzaBlock from "./components/pizza/PizzaBlock.tsx";

function App() {

  return (
      <>
        <div className="wrapper">
          <Header/>
          <div className="content">
            <div className="container">
              <div className="content__top">
                <Categories/>
                <Sort/>
              </div>
              <h2 className="content__title">Всі піци</h2>
              <div className="content__items">
                <PizzaBlock name="Якась піцца" price={666}/>
                <PizzaBlock name="Якась піцца" price={666}/>
                <PizzaBlock name="Якась піцца" price={666}/>
                <PizzaBlock name="Якась піцца" price={666}/>
                <PizzaBlock name="Якась піцца" price={666}/>
                <PizzaBlock name="Якась піцца" price={666}/>
                <PizzaBlock name="Якась піцца" price={666}/>
                <PizzaBlock name="Якась піцца" price={666}/>
                <PizzaBlock name="Якась піцца" price={666}/>
                <PizzaBlock name="Якась піцца" price={666}/>
                <PizzaBlock name="Якась піцца" price={666}/>
                <PizzaBlock name="Якась піцца" price={666}/>
                <PizzaBlock name="Якась піцца" price={666}/>
                <PizzaBlock name="Якась піцца" price={666}/>
                <PizzaBlock name="Якась піцца" price={666}/>
                <PizzaBlock name="Якась піцца" price={666}/>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default App

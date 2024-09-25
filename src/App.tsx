import {useState} from "react";
import './App.css';
import meat from './assets/meat.png';
import cheese from './assets/cheese.png';
import salad from './assets/salad.png';
import bacon from './assets/bacon.png';
import Ingredient from "./components/Ingredient/Ingredient.tsx";

type IngredientType = {
    title: string;
    cost: number;
    src: string;
    key:string
}

interface IIngredients {
    name: string ;
    count: number;
}

function App() {
    const ingredientsItem: IngredientType[] = [
        {title: 'Meat', cost: 80, src: meat, key:String(Math.random() * 1000)},
        {title: 'Cheese', cost: 50, src: cheese, key:String(Math.random() * 1000)},
        {title: 'Salad', cost: 10, src: salad, key:String(Math.random() * 1000)},
        {title: 'Bacon', cost: 60, src: bacon, key:String(Math.random() * 1000)}
    ];

    const [ingredients, setIngredients] = useState<{}>({
        ingredients: 0,
        Cheese: 0,
        Salad: 0,
        Bacon: 0,}
    );

    // const AddIngredientToBurger = (e) =>{
    //
    // }

  return (
    <>
        <div className="content">
            <div className='content-item'><h2>Ingredients</h2>
                {ingredientsItem.map((ingredient) =>
            <Ingredient onClickAdd={AddIngredientToBurger} key = {ingredient.key} name = {ingredient.title} count = {0} src={ingredient.src} />)}
            </div>
            <div>
                <h2>Burger</h2>
                <div className="Burger">
                    <div className="BreadTop">
                        <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                    </div>
                    <div className="Salad"></div>
                    <div className="Cheese"></div>
                    <div className="Meat"></div>
                    <div className="BreadBottom"></div>
                </div>
                <span className='price'> Price: 0 </span>
            </div>
        </div>
    </>
  )
}

export default App

import {useState} from "react";
import './App.css';
import meat from './assets/meat.png';
import cheese from './assets/cheese.png';
import salad from './assets/salad.png';
import bacon from './assets/bacon.png';
import ButtonImage from "./components/ButtonImage/ButtonImage.tsx";
import Quantity from "./components/Quantity/Quantity.tsx";

type IngredientType = {
    title: string;
    cost: number;
    src: string;
}

interface IIngredients {
    name: string ;
    count: number;
}

function App() {
    const ingredientsItem: IngredientType[] = [
        {title: 'Meat', cost: 80, src: meat},
        {title: 'Cheese', cost: 50, src: cheese},
        {title: 'Salad', cost: 10, src: salad},
        {title: 'Bacon', cost: 60, src: bacon}
    ];

    const [ingredients, setIngredients] = useState<IIngredients[]>([
        {name: 'Meat', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Salad', count: 0},
        {name: 'Bacon', count: 0},
        ]);

    const AddIngredientToBurger = (ingredientName:string) =>{
console.log(ingredientName);
ingredients.map(ingredient => {
    if(ingredient.name === ingredientName) {
        ingredient.count ++;
    }
})
        setIngredients(ingredients);
  };


  return (
    <>
        <div className="content">
            <div className='content-item'>
                <h2>Ingredients</h2>
                <div className='ingredients-block'>
                    <div className='ingredients-left'>
                        {ingredientsItem.map((ingredient) =>
                            <ButtonImage onClickAdd={() => AddIngredientToBurger(ingredient.title)}
                                         key={ingredient.title}
                                         name={ingredient.title}
                                         src={ingredient.src}/>)}
                    </div>
                    <div className='ingredients-right'>
                        {ingredients.map((ingredient) =>
                            <Quantity key={ingredient.name + 1} count={ingredient.count}/>)
                        }
                    </div>
                </div>
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

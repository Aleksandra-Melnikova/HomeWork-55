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

    const [price, setPrice] = useState<number>(30);
    const [ingredients, setIngredients] = useState<IIngredients[]>([
        {name: 'Meat', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Salad', count: 0},
        {name: 'Bacon', count: 0},
        ]);

    const AddIngredientToBurger = (ingredientName:string) =>{
        let index = ingredients.findIndex(ingredient => ingredient.name === ingredientName);
    const copyIngredients = ingredients.map(ingredient => {
    if (ingredient.name === ingredientName) {
        return {
            ...ingredient,
            count: ingredient.count + 1,
        };
    }
    return {...ingredient};

});

        let priceToState = ingredientsItem.reduce((acc,item) => {
            if((item.title === ingredientName)){
                acc+= item.cost;
            }
            return acc;
        },price);
        setPrice(priceToState);
        setIngredients(copyIngredients);
        const newIngredientImage = document.createElement('DIV')
        newIngredientImage.className = ingredients[index].name;
        const burgerImage = document.getElementById('burger') as HTMLImageElement;
        burgerImage.insertBefore(newIngredientImage, document.getElementById('breadBottom'));

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
                    <div id='burger' className="Burger">
                        <div className="BreadTop">
                            <div className="Seeds1"></div>
                            <div className="Seeds2"></div>
                        </div>
                        {/*<div className="Salad"></div>*/}
                        {/*<div className="Cheese"></div>*/}
                        {/*<div className="Meat"></div>*/}
                        <div id="breadBottom" className="BreadBottom"></div>
                    </div>
                    <span className='price'> Price: {price} som </span>
                </div>
            </div>
        </>
  )
}

export default App

import {useState} from 'react';
import './App.css';
import meat from './assets/meat.png';
import cheese from './assets/cheese.png';
import salad from './assets/salad.png';
import bacon from './assets/bacon.png';
import Price from './components/Price/Price.tsx';
import {IngredientType} from './types';
import ButtonAndName from './components/ButtonAndName/ButtonAndName.tsx';
import {IIngredients} from './types';
import QuantityAndDelete from './components/QuantityAndDelete/QuantityAndDelete.tsx';

const App = () => {
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
        const copyIngredients = ingredients.map(ingredient => {
            if (ingredient.name === ingredientName) {
                return {
                    ...ingredient,
                     count: ingredient.count + 1,
                };
            }
                return {...ingredient};
            });
        const priceToState = ingredientsItem.reduce((acc,item) => {
            if(item.title === ingredientName){
                acc+= item.cost;}
            return acc;
            },price);
            setPrice(priceToState);
            setIngredients(copyIngredients);
    };

    const DeleteIngredient =(ingredientName:string) => {
        const copyIngredients = ingredients.map(ingredient => {
            if (ingredient.name === ingredientName) {
                return {
                    ...ingredient,
                    count: ingredient.count - 1,
                };
            }
            return {...ingredient};
        });
        const priceToState = ingredientsItem.reduce((acc, item) => {
            if ((item.title === ingredientName)) {
                acc -= item.cost;
            }
            return acc;
            }, price);
        setPrice(priceToState);
        setIngredients(copyIngredients);
    };

    const createArrayForDrawBurger = (ingredients:IIngredients[]) => {
        const arrayOfName:string[] = [];
        {ingredients.map((ingredient) =>{
            if(ingredient.count > 0){
                for (let i = 0; i < ingredient.count; i++){
                    arrayOfName.push(ingredient.name);
                }
            }
        });
        }
        return arrayOfName;
    };

    let burgerList = null;

    if (createArrayForDrawBurger(ingredients).length !== 0) {
        burgerList = createArrayForDrawBurger(ingredients).map(ingredient =>{
            return (<div key={ingredient + String(Math.floor(Math.random() * 1000))} className={ingredient}></div>);
        });
    }

    return (
        <>
            <div className="content">
                <div>
                <h2>Ingredients</h2>
                <div className='ingredients-block'>
                    <ButtonAndName ingredientsItem={ingredientsItem} AddIngredientToBurger={AddIngredientToBurger}/>
                    <QuantityAndDelete ingredients={ingredients} DeleteIngredient={DeleteIngredient}/>
                </div>
            </div>
                <div>
                    <h2>Burger</h2>
                    <div id='burger' className="Burger">
                        <div className="BreadTop">
                            <div className="Seeds1"></div>
                            <div className="Seeds2"></div>
                        </div>
                        {burgerList}
                        <div id="breadBottom" className="BreadBottom"></div>
                    </div>
                    <Price price={price}/>
                </div>
            </div>
        </>
    );
};

export default App;

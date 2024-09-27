import React from 'react';
import ButtonImage from './ButtonImage/ButtonImage.tsx';
import {IngredientType} from '../../types';
import './ButtonAndName.css';

interface Props {
    ingredientsItem: IngredientType[];
    AddIngredientToBurger:(ingredientName:string) => void;
}

const ButtonAndName:React.FC<Props> = ({ingredientsItem, AddIngredientToBurger}) => {
    return (
            <div className='ingredients-left'>
                {ingredientsItem.map((ingredient) =>
                    <ButtonImage onClickAdd={() => AddIngredientToBurger(ingredient.title)}
                                 key={ingredient.title}
                                 name={ingredient.title}
                                 src={ingredient.src}/>)}
            </div>
    );
};

export default ButtonAndName;
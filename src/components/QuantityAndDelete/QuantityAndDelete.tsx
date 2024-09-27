import React from 'react';
import Quantity from './Quantity/Quantity.tsx';
import {IIngredients} from '../../types';
import './QuantityAndDelete.css';

interface Props {
    ingredients:IIngredients[];
    DeleteIngredient:(name:string) => void;
}

const QuantityAndDelete:React.FC<Props> = ({ingredients, DeleteIngredient }) => {
    return (
            <div className='ingredients-right'>
                {ingredients.map((ingredient) =>
                    <Quantity key={ingredient.name + 1} count={ingredient.count}
                              deleteIngredient={() => DeleteIngredient(ingredient.name)}/>)
                }
            </div>
    );
};

export default QuantityAndDelete;
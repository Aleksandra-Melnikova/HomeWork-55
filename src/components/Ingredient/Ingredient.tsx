import React from 'react';
import './ingredient.css';

interface Ingredient {
    name: string;
    count: number;
    src: string;
    onClickAdd: () => void;
}

const Ingredient:React.FC<Ingredient> = ({name, count, src, onClickAdd}) => {
    return (
        <div className='ingredient'>
            <button onClick={onClickAdd} type="button"><img className="ingredient-image" src={src} alt={name}></img></button>
            <p className='name'>{name}</p>
            <p>X {count}</p>
            {count === 0? <button type="button">Reset</button>: null }
        </div>
    );
};

export default Ingredient;
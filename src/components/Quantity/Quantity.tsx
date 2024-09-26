import React from "react";
import './Quantity.css'

interface Quantity {
    count: number;
    deleteIngredient: () => void;
}

const Quantity:React.FC<Quantity> = ({count,deleteIngredient}) => {
    return (
        <div className='count-reset-wrapper'>
            <p>X {count}</p>
            {count !== 0 ? <button onClick={deleteIngredient} type="button">Reset</button>:null}
        </div>
    );
};

export default Quantity;
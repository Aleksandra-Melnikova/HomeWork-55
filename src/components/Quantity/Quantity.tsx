import React from "react";
import './Quantity.css'

interface Quantity {
    count: number;
}

const Quantity:React.FC<Quantity> = ({count}) => {
    return (
        <div className='count-reset-wrapper'>
            <p>X {count}</p>
            {count !== 0 ? <button type="button">Reset</button>:null}
        </div>
    );
};

export default Quantity;
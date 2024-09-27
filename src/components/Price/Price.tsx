import React from 'react';

interface IPriceProps {
    price: number;
}

const Price:React.FC<IPriceProps> = ({price}) => {
    return (
            <span className='price'> Price: {price} som </span>
    );
};

export default Price;
import React from 'react';
import './ButtonImage.css';


interface ButtonImage {
    name: string;
    src: string;
    onClickAdd: () => void;
}

const ButtonImage:React.FC<ButtonImage> = ({name, src, onClickAdd}) => {
    return (
        <div className='button-image'>
            <button onClick={onClickAdd} type="button"><img className="ingredient-image" src={src} alt={name}></img>
            </button>
            <p className='name'>{name}</p>
        </div>

        // <div className='ingredient'>
        //
        //
        //     <p>X {count}</p>
        //         {count !== 0? <button type="button">Reset</button>: null }
    //     </div>
    );
};

export default ButtonImage;
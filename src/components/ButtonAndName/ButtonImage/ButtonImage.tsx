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
            <button className="btn-image" onClick={onClickAdd} type="button"><img className="ingredient-image" src={src} alt={name}></img>
            </button>
            <p className='name'>{name}</p>
        </div>

    );
};

export default ButtonImage;
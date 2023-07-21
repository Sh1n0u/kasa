import React  from 'react';
import './portrait.scss'

const Host = ({ name, picture }) => {
    return (
        <div className='portrait-container'>
            <h2>{name}</h2>
            <img src={picture} alt="Photo de l'hôte" />
        </div>
    );
};

export default Host;
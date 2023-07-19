import React from 'react';
import './title.scss'

function Titre({ title, location }) {
    return (
        <div className='title'>
            <h1>{title}</h1>
            <h3>{location}</h3>
        </div>
    )
}

export default Titre
import React from 'react';
import Red from '../../assets/star-active.png'
import Grey from '../../assets/star-inactive.png'
import './rating.scss'

function Rating({ rating }) {
    // Créer un tableau pour stocker les étoiles pleines et vides
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (rating >= i + 0.5) {
            // Étoile pleine
            stars.push(<img key={i} src={Red} alt="Star active" />)
        } else {
            // Étoile vide
            stars.push(<img key={i} src={Grey} alt="Star inactive" />);
        }
    }

    return (
        <div className='rating'>
            {stars}
        </div>
    );
}

export default Rating;

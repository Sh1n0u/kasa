import React from 'react'
import bannerAccueil from '../../assets/banneraccueil.png'
import bannerApropos from '../../assets/bannerapropos.png'
import './banner.scss'

function Banner({ currentPage }) {
    let image;
    let text;

    if (currentPage === 'accueil') {
        image = bannerAccueil;
        text = 'Chez vous, partout et ailleurs'
    } else if (currentPage === 'apropos') {
        image = bannerApropos;
    }

    return (
        <div className='banner'>
            <img src={image} alt="Bannière de page" />
            <p>{text}</p>
        </div>
    )
}

export default Banner
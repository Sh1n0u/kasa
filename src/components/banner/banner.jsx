import React from 'react'
import './banner.scss'

function Banner({ img, text }) {

    return (
        <div className='banner'>
            <img src={img} alt="Bannière de page" />
            <p>{text}</p>
        </div>
    )
}

export default Banner
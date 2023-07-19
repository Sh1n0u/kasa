import Banner from "../components/banner/banner"
import Card from "../components/card/card"
import React, { useEffect } from 'react'
import bannerAccueil from '../assets/banneraccueil.png'

function Accueil() {

    useEffect(() => {
        document.title = "Bienvenue chez Kasa";
    }, []);

    return (
        <div>
            <Banner img={bannerAccueil} text={'Chez vous, partout et ailleurs'}/>
            <Card />
        </div>
    )
}

export default Accueil
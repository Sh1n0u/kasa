import Banner from "../components/banner/banner"
import Card from "../components/card/card"
import React, { useEffect } from 'react'

function Accueil() {
    const currentPage = 'accueil'
    useEffect(() => {
        document.title = "Bienvenue chez Kasa";
    }, []);

    return (
        <div>
            <Banner currentPage={currentPage}/>
            <Card />
        </div>
    )
}

export default Accueil
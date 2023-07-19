import Banner from "../components/banner/banner"
import Accordions from '../components/accordion/accordions'
import React, { useEffect } from 'react'
import bannerApropos from '../assets/bannerapropos.png'

function Apropos() {

    useEffect(() => {
        document.title = "A propos";
    }, []);

    return (
        <div>
            <Banner img={bannerApropos} />
            <Accordions />
        </div>
    )
}

export default Apropos
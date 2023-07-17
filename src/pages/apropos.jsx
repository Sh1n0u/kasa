import Banner from "../components/banner/banner"
import Accordion from '../components/accordion/accordion'
import React, { useEffect } from 'react'

function Apropos() {
    const currentPage = 'apropos'

    useEffect(() => {
        document.title = "A propos";
    }, []);

    return (
        <div>
            <Banner currentPage={currentPage} />
            <Accordion />
        </div>
    )
}

export default Apropos
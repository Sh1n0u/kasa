import Banner from "../components/banner/banner"
import Card from "../components/card/card"

function Accueil() {
    const currentPage = 'accueil'

    return (
        <div>
            <Banner currentPage={currentPage}/>
            <Card />
        </div>
    )
}

export default Accueil
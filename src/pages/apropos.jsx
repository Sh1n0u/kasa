import Banner from "../components/banner/banner"
import Accordion from '../components/accordion/accordion'

function Apropos() {
    const currentPage = 'apropos'

    return (
        <div>
            <Banner currentPage={currentPage} />
            <Accordion />
        </div>
    )
}

export default Apropos
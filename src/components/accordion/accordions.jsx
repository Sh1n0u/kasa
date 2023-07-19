import AccordionItem from './accordionItem';
import data from '../../assets/apropos.json';

//fonction de génération des accordions 'apropos'
function Accordions() {

    return (
        <div className="accordion-container">
            {data.map((item, index) => (
                <AccordionItem key={index} title={item.title} descriptions={[item.description]} />
            ))}
        </div>
    );
}
export default Accordions;
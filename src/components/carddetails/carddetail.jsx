import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../assets/logements.json';

import './carddetail.scss';
import '../accordion/accordion.scss'

import Carousel from '../carousel/carousel';
import Error from '../error/error'
import AccordionItem from '../accordion/accordionItem';
import Titre from '../titre/titre';
import Tags from '../tags/tags';


function CardDetails() {
    const { id } = useParams();
    const selectedItem = data.find((item) => item.id === id);

    useEffect(() => {
        document.title = selectedItem.title;
    }, []);

    if (!selectedItem) {
        return <Error />;
    }

    return (
        <div className="card-details">
            <Carousel images={selectedItem.pictures} />
            <Titre key={selectedItem.id} title={selectedItem.title} location={selectedItem.location}/>
            <Tags tags={selectedItem.tags} />
            <div className='accordion-container description-item'>
                <AccordionItem key={selectedItem.id} title="Description" descriptions={[selectedItem.description]}/>
                <AccordionItem key={selectedItem.id} title="Equipement" descriptions={[selectedItem.equipments]}/>
            </div>

        </div>
    );
}

export default CardDetails;


            {/*<Portrait />
            <Tag /> */}
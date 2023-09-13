import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../assets/logements.json';

import './carddetail.scss';
import '../accordion/accordion.scss';

import Carousel from '../carousel/carousel';
import Error from '../error/error';
import AccordionItem from '../accordion/accordionItem';
import Titre from '../titre/titre';
import Tags from '../tags/tags';
import Host from '../portrait/portrait';
import Rating from '../ratting/rating';

function CardDetails() {

    const { id } = useParams();
    const selectedItem = data.find((item) => item.id === id);

    if (!selectedItem) {
        return <Error />;
    }

    document.title = selectedItem.title;

    return (
        <div className="card-details">
            <Carousel images={selectedItem.pictures} />
            <div className="card-info">
                <div>
                    <Titre key={selectedItem.id} title={selectedItem.title} location={selectedItem.location} />
                    <Tags tags={selectedItem.tags} />
                </div>
                <div className="host-rating">
                    <Host
                        name={selectedItem.host.name}
                        picture={selectedItem.host.picture}
                        alt={selectedItem.host.name}
                    />
                    <Rating rating={selectedItem.rating} />
                </div>
            </div>

            <div className="accordion-container description-item">
                <AccordionItem key={selectedItem.id} title="Description" description={selectedItem.description} />
                <AccordionItem
                    key={selectedItem.id}
                    title="Equipement"
                    description={selectedItem.equipments.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                />
            </div>
        </div>
    );
}

export default CardDetails;

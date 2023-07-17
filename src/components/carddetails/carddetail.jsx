import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../assets/logements.json';
import Carousel from '../carrousel/carrousel';
import './carddetail.scss';

function CardDetails() {
  const { id } = useParams();
  const selectedItem = data.find((item) => item.id === id);

  if (!selectedItem) {
    return <div>Aucun élément trouvé pour cet ID.</div>;
  }

  return (
    <div className="card-details">
      <h2>{selectedItem.title}</h2>
      <Carousel images={selectedItem.images} />
    </div>
  );
}

export default CardDetails;

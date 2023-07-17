import React, { useState } from 'react';

function Accordion() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='accordion'>
            <div className='accordion-header' onClick={toggleAccordion}>
                Titre de bouton
            </div>
            {isOpen && (
                <div className='accordion-content'>
                    <p>Texte de l'accordion</p>
                </div>
            )}
        </div>
    );
}

export default Accordion
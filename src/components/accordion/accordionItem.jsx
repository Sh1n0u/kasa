import React, { useState } from 'react';
import './accordion.scss';
import img from '../../assets/chevron.png';

const AccordionItem = (props) => {
    const { title, description } = props;
    const [open, setOpen] = useState(false);
    const toggleAccordion = () => {
        setOpen(!open);
    };

    return (
        <div className="accordion-item">
            <div className="accordion-header">
                {title}
                <span className={`chevron-icon ${open ? 'rotate' : ''}`} onClick={() => toggleAccordion()}>
                    <span className={`chevron-icon ${open ? 'rotate' : ''}`}>
                        <img src={img} alt="icone du chevron" />
                    </span>
                </span>
            </div>
            <div className={`accordion-content ${open ? 'open' : ''}`}>
                <p>{description}</p>
            </div>
        </div>
    );
};


export default AccordionItem;
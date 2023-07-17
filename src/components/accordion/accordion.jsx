import React, { useState } from 'react';
import data from '../../assets/apropos.json';
import './accordion.scss';

function Accordion() {
    const [openIndex, setOpenIndex] = useState(-1);

    const toggleAccordion = (index) => {
        if (openIndex === index) {
            setOpenIndex(-1);
        } else {
            setOpenIndex(index);
        }
    };

    const toggleAccordionByChevron = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };

    const getChevronIcon = (index) => {
        return <span className={`chevron-icon ${openIndex === index ? 'rotate' : ''}`}>&#8744;</span>;
    };

    return (
        <div className="accordion-container">
            {data.map((item, index) => (
                <div className="accordion-item" key={index}>
                <div className="accordion-header">
                    <div onClick={() => toggleAccordionByChevron(index)}>
                        {item.title}
                    </div>
                    <span className={`chevron-icon ${openIndex === index ? 'rotate' : ''}`} onClick={() => toggleAccordionByChevron(index)}>
                        {getChevronIcon(index)}
                    </span>
                </div>
                <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
                    <p>{item.description}</p>
                </div>
                </div>
            ))}
        </div>
    );
}

export default Accordion;

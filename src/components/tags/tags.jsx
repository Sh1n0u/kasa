import React from "react";
import './tags.scss'

function Tags({ tags }) {
    return (
        <div className="tag-container">
            {tags.map((tag, index) => (
                <span key={index} className="tag-item">{tag}</span>
            ))}
        </div>
    );
}

export default Tags;

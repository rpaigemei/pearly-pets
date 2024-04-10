import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";


import './ArticleCard.css'

function AnimalCard({ name, description, image, link }) {
    return (
        <div className="card">
            <div className="cardThumb">
                <img src={image} alt="article" className="image" />
            </div>
            <div className="cardBody">
                <div className="name">
                    {name}
                </div>
                <div className="description">
                    {description}
                </div>
                <a href={link} className="readMore">
                    Read More
                    <FaExternalLinkAlt className="icon"/>
                </a>
            </div>
        </div>
    );
}

export default AnimalCard;
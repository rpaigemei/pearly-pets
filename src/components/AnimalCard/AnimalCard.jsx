import React from "react";

import "./AnimalCard.css";

function AnimalCard({ name, breed, age, gender, colors, size, location, about, picture, link }) {
    return (
        <div className="petCard">
            <div className="petCardThumb">
                <img src={picture} alt="pet" className="petImage" />
            </div>
            <div className="petCardBody">
                <div className="petName">
                    {name}
                    <p>
                        {breed}
                    </p>
                     
                </div>
                <div className="aboutPet">
                    {location} <br></br>
                    {age} <br></br>
                    {gender} <br></br>
                    {size} <br></br>
                    {colors} <br></br>
                    <br></br>
                    <div className="learnMore">
                        Learn more about {name}!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnimalCard;
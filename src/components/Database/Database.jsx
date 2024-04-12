import React/*, { useEffect }*/ from "react";
import AnimalCard from "../AnimalCard/AnimalCard";

import "./Database.css";
// import API from "../../api/API";
import pets from "./mockPets";

function Database({ type, filterText }) {
    /*
    const {isLoading, error, fetchData, pets } = API();

    useEffect(() => {
        fetchData('https://api.petfinder.com/v2/animals?type=dog&age=senior');
    }, [fetchData]);
    */

    const filteredPets = pets.filter((pet) => pet.type.includes(type) && pet.name.includes(filterText));

    return (
        <div className="petGallery">
            {filteredPets.map((pet) => {
                return (
                    <AnimalCard
                        name={pet.name}
                        breed={pet.breed}
                        age={pet.age}
                        gender={pet.gender}
                        colors={pet.colors}
                        size={pet.size}
                        location={pet.location}
                        about={pet.about}
                        picture={pet.picture}
                        link={pet.picture}
                    />
                )
            })}
        </div>
    );
};

export default Database;
import React, { useEffect } from "react";
// import AnimalCard from "../AnimalCard/AnimalCard";

import "./Database.css";
import API from "../../api/API";

function Database() {
    const {isLoading, error, fetchData, pets } = API();

    useEffect(() => {
        fetchData('https://api.petfinder.com/v2/animals?type=dog&age=senior');
    }, [fetchData]);

    return (
        <div>
            {isLoading ? (
                <p>
                    Loading...
                </p>
            ) : error ? (
                <p>
                    {error}
                </p>
            ) : (
                <ul>
                    {pets.map((pet) => {
                        return(
                            <li key={pet.id}>
                                {pet.name}
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    );
};

export default Database;
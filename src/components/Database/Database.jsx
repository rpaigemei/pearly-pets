import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import useHttp from "../../hooks/useHttp";
import Pagination from "../Pagination/Pagination";
import AnimalCard from "../AnimalCard/AnimalCard";
import placeholder from "../../images/placeholder.jpeg";

function Database() {
    const { pet, location } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const { isLoading, error, fetchData, result } = useHttp();

    const currentPage = searchParams.get('page');

    useEffect (() => {
        window.scrollTo(0, 0);
        fetchData(`https://api.petfinder.com/v2/animals?type=${pet}&page=${currentPage}`);
    }, [fetchData, pet, location, currentPage]);

    const totalPages = result?.pagination.total_pages;

    const getNextPage = (page) => {
        setSearchParams({ page: page });
    }

    return (
        <div>
            {error &&
                <p>
                    {error}
                </p>
            }

            {result &&
                <div>
                    pets:
                </div>
            }
            {result &&
                <div>
                    {result.animals.map(animal => {
                        const breeds = `${animal.breeds.primary ? animal.breeds.primary : ''}${animal.breeds.secondary ? '&' + animal.breeds.secondary + ' mix' : ''}`;
                        const image = animal.primary_photo_cropped?.small || placeholder;
                        return (
                            <AnimalCard
                                key={animal.id}
                                loading={isLoading}
                                pet={pet}
                                petId={animal.id}
                                image={image}
                                name={animal.name}
                                breeds={breeds}
                                age={animal.age}
                                gender={animal.gender}
                                distance={animal.distance}
                            />
                        )
                    })}
                </div>
            }
            {result && <Pagination currentPage={currentPage} totalPages={totalPages} getNextPage={getNextPage} />}
        </div>
    )
}

export default Database;
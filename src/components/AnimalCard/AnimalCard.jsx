import { Link } from "react-router-dom";

function AnimalCard({ loading, pet, petID, image, name, breeds, age, gender, distance }) {
    return (
        <div>
            <Link to={`/{pet}/${petID}`}>
                <div>
                    <image src={image} alt={name}/>
                </div>
                <div>
                    <p>{name}</p>
                    <p>{breeds}</p>
                    <p>{age}</p>
                    <p>{gender}</p>
                    <p>{distance}</p>
                </div>
            </Link>
        </div>
    );
}

export default AnimalCard;
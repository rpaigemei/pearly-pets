/* Credit to https://github.com/jismonthomas/petfinder-react */
const API_DOMAIN = process.env.REACT_APP_API_URL;

export async function addToFavorites(petData) {
    const response = await fetch(`${API_DOMAIN}/favorites/${petData.userID}.json`, {
        method: 'POST',
        body: JSON.stringify ({
            petID: petData.petID,
            pet: petData.pet,
            name: petData.name,
            image: petData.image,
            breeds: petData.breeds,
            gender: petData.gender,
            age: petData.age,
            distance: petData.distance
        }),
        headers: {
            'Content-ype': 'application/json'
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error('Could not save favorite');
    }

    return data.name;
}

export async function getUserFavorites(userID) {
    const response = await fetch(`${API_DOMAIN}/favorites/${userID}.json`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error('Could not get favorites');
    }

    const userFavorites = [];

    for (const key in data) {
        const favObj = {
            fbID: key,
            petID: data[key].petID,
            pet: data[key].pet,
            name: data[key].name,
            image: data[key].image,
            breeds: data[key].breeds,
            gender: data[key].gender,
            age: data[key].age,
            distance: data[key].distance
        }
        userFavorites.push(favObj);
    }
    return userFavorites;
}

export async function deleteUserFavorite(petData) {
    const response = await fetch(`${API_DOMAIN}/favorites/${petData.userID}/${petData.fbID}.json`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Could not delete favorite');
    }
}
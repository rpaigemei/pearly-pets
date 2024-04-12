import { useCallback, useState } from "react";

// TODO: secure keys
const API_KEY = 'u7DTJXqMMqstdXmAb7dET9ytr7QCMOu3a5PXgpXtwSY5Cm89Jf';
const API_SECRET = 'wBBxwo8VDBL2foLeyXpxd0BJFN0MrrPs6R49am8M';

const API = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const [pets, setPets] = useState([]);
    const [token, setToken] = useState('');
    const [tokenExpiry, setTokenExpiry] = useState();
    
    const getToken = async () => {
        try {
            const response = await fetch('https://api.petfinder.com/v2/oauth2/token/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    grant_type: 'client_credentials',
                    client_id: API_KEY,
                    client_secret: API_SECRET
                })
            });
            
            const data = await response.json();
            const tokenExpiry = new Date().getTime() + data.expires_in * 1000;

            setToken(data.access_token);
            setTokenExpiry(tokenExpiry);
        }
        catch (error) {
            setError(error.message)
        }
    }

    const fetchData = useCallback(async (url) => {
        setIsLoading(true);
        setError(null);
        
        if (!token) {
            setToken(getToken());
        }
        else {
            const currentTime = new Date().getTime();
            if (currentTime > tokenExpiry) {
                setToken(getToken());
            }
        }
        

        try {
            const response = await fetch(url, {
            method: 'GET',   
            headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response);

            const data = await response.json();
            setPets(data);
        }
        catch (error) {
            setError(error.message);
        }

        setIsLoading(false);
    // eslint-disable-next-line
    }, []);

    return {
        isLoading,
        error,
        fetchData,
        pets
    };
};

export default API;
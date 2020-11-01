import { useEffect, useState } from 'react';
import { apiUrl } from '../utils/baseUrl';

const useSearchMovie = movieType => {
    const type = movieType === 'movies' ? 'movie' : movieType
    const [searchResults, setSearchResults] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);

    useEffect(() => {
        const performSearch = async () => {
            try {
                setLoading(true);
                setSearchResults([]);
                const response = await fetch(apiUrl);

                if (response && response.status === 200) {
                    let json = await response.json();
                    
                    if (json && json.entries) {
                        json = json.entries
                            .filter(entry => entry.programType === type && entry.releaseYear >= 2010)
                            .slice(0, 21)
                            .sort((a,b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : a.title.toLowerCase() > b.title.toLowerCase() ? 1 : 0);
                        
                        setSearchResults(json);
                        setError(undefined);
                    } else {
                        setSearchResults([]);
                        setError(undefined);
                    }
                    
                } else {
                    throw new Error(response.statusText);
                }   

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        performSearch();
    }, []);

    return { searchResults, loading, error };
};

export default useSearchMovie;

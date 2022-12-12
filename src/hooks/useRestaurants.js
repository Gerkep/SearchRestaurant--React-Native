import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState();

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (e) {
            setError("Something went wrong...")
            console.log(e)
        }
    }
    
    useEffect(() => {
        searchApi('pasta')
    })
    return [searchApi, results, error]
}
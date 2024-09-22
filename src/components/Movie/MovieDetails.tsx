import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from '../types/Movie';

export const MovieDetails = () => {
    const { imdbId } = useParams();
    const [movie, setMovie] = useState();


    
    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/V1/movies/${imdbId}`);
                const data = await response.json();
                setMovie(data);
                
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [imdbId]);

    return (
        <div>
            
        </div>
    );
};

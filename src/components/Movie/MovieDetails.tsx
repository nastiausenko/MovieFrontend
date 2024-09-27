import { CSSProperties, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Paper } from '@mui/material';

import { Movie } from '../types/Movie';
import Carousel from 'react-material-ui-carousel';


interface CustomCSSProperties extends CSSProperties {
    "--img"?: string;
}


export const MovieDetails = () => {
    const { imdbId } = useParams();
    const [movie, setMovie] = useState<Movie | null>(null);

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

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className='movie-container'>
            <div className='movie-carousel-container'>
                <div className='movie-card-container'>
                    <div className="movie-card" style={{ "--img": `url(${movie.backdrops[0]})` } as CustomCSSProperties}>
                        <div className="movie-detail">
                            <div className='movie'>
                                <div className="movie-poster">
                                    <img src={movie.poster} alt={movie.title} />
                                </div>
                                <div className="movie-title">
                                    <h4>{movie.title}</h4>
                                    <div className="movie-buttons-container">
                                        <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                            <div className="play-button-icon-container">
                                                <FontAwesomeIcon className="play-button-icon" icon={faPlay} />
                                                    Start watch
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="backdrop-thumbnails">
                {movie.backdrops.slice(1, 6).map((backdrop, index) => (
                    <div className='backdrop-thumbnail'>
                        <div className="backdrop">
                            <img src={backdrop} alt={`Screenshot ${index + 1}`} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

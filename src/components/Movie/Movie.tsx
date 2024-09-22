import { CSSProperties, useEffect, useState } from 'react';
import { Movie } from '../types/Movie';
import './Movie.css';
import { faCirclePlay, faFilter, faPlay, faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";


interface CustomCSSProperties extends CSSProperties {
    "--img"?: string;
}

export const Movies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/V1/movies');
                const data: Movie[] = await response.json();
                setMovies(data);
        
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className='movie-container'>
            <div className='movie-carousel-container'>
                <Carousel className='custom-carousel'>
                    {
                        movies.map((movie) => {
                            return (
                                <Paper key={movie.imdbId}>
                                    <div className='movie-card-container'>
                                        <div className="movie-card" style={{ "--img": `url(${movie.backdrops[0]})` } as CustomCSSProperties}>
                                            <div className="movie-detail">
                                                <div className='movie'>
                                                    <div className="movie-poster">
                                                        <img src={movie.poster} alt="" />
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
                                </Paper>
                            )
                        })
                    }
                </Carousel>
            </div>
            <div className='filter-container'>
                <div className='sort-button-icon-container'><FontAwesomeIcon className='sort-button-icon' icon={faSort}/>Sort</div>
                <div className='filter-button-icon-container'><FontAwesomeIcon className='filter-button-icon' icon={faFilter}/>Filter</div>
            </div>
            <div className='movies-list-container'>
                {movies.map((movie) => (
                    <NavLink to={`/Movie/${movie.imdbId}`} key={movie.imdbId} className="movie-link">
                    <div className="movie-card-list" key={movie.imdbId}>
                        <FontAwesomeIcon icon={faCirclePlay} className="play-icon" />
                        <img src={movie.poster} alt={movie.title} className="movie-poster-list" />
                    </div>
                    <h3 className="movie-title-list">{movie.title}</h3>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

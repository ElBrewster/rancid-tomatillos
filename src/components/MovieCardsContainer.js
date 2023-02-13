import React from 'react'
import '../css/MovieCardsContainer.scss'
import MovieCard from './MovieCard';

export default function MovieCardsContainer({movies}) {
    const movieCards = movies.map(movie => {
        return (
            <MovieCard 
                posterPath={ movie.poster_path }
                key={ movie.id }
                id={ movie.id }
            />
        );
    });

    return (
        <section className='movie-card-overview'>
            { movieCards }
        </section>
    );
};

import { useEffect, useState } from 'react'
import { useUser } from '../hooks/useUser'
import { Filter } from './Filter'
import Burton from '../../assets/burton.png'
import Logo from '../../assets/logo.png'

export function MovieCard () {
    
    const {
        popularMovies,
        cinema,
        selectedFilter,
        groupedMoviesByJob,
        setSelectedFilter,
        handleMovieCardClick,
        fetchData,
    } = useUser();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
            <div class="flex">
                <img src={Burton} alt="Burton" class="w-1/3"/>
                <div>
                    <img src={Logo} alt="Logo" class='w-1/2' />

                    <h2>Known For</h2>
                    <div class="flex">
                    {popularMovies.map((destac) => (
                        <div key={destac.id} onClick={() => handleMovieCardClick(destac)}>
                            <img
                                src={`https://image.tmdb.org/t/p/w200${destac.posterPath}`}
                                alt={destac.title}
                            />
                            <h3>{destac.title}</h3>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <Filter
                        groupedMoviesByJob={groupedMoviesByJob}
                        selectedFilter={selectedFilter}
                        setSelectedFilter={setSelectedFilter}
                    />
                </div>
                {Object.entries(groupedMoviesByJob)
                .sort(([, moviesA], [, moviesB]) => moviesB.length - moviesA.length)
                .map(([job, movies]) => (
                    <div key={job}>
                        {(!selectedFilter || selectedFilter === job) && (
                            <>
                                <h2>{job}</h2>
                                <div className="grid grid-cols-5 gap-2">
                                    {movies.map((movie) => (
                                        <div key={movie.id} onClick={() => handleMovieCardClick(movie)}>
                                            <img
                                                src={`https://image.tmdb.org/t/p/w200${movie.posterPath}`}
                                                alt={`Portada de ${movie.title}`}
                                            />
                                            <h3>{movie.title}</h3>
                                            <p>{movie.job}</p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>        
        </>
    )
}
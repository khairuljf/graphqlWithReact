import  React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ANIME } from './queries';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';


export const AnimeDetails = ({animeID}) => {


  const {id} = useParams();


    const {loading, error, data} = useQuery(GET_ANIME, {
        variables: {id: id}
    });

    if (loading) return <p>Loading....</p>
    if (error) return <p>Something went wrong {error.message}</p>
    
    const {anime} = data;

    return (
        <div className="anime-details">
           <Link to={`/`}>
                Back To home         
           </Link>
        <h1 className="anime-title">{anime.title}</h1>
        <img src={anime.images.jpg.large_image_url} alt={anime.title} />
        <div className="anime-info">
          <p className="anime-episodes">Episodes: {anime.episodes}</p>
          <p className="anime-synopsis">{anime.synopsis}</p>
          <ul className="anime-genres">
            {anime.genres && anime.genres.map((genre) => (
              <li key={genre.name} className="anime-genre">{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
    )
}
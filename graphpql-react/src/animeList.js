import  React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ANIMES } from './queries';
import { Link } from 'react-router-dom';

export const AnimeList = ({animeID}) => {
    const {loading, error, data} = useQuery(GET_ANIMES);

    if (loading) return <p>Loading....</p>
    if (error) return <p>Something went wrong {error.message}</p>
    
    console.log('data', data)

    return (
        <div className='animal-wrap' >
          {
            data?.animes?.map((animal)=>(
              <div className="anime-list">
                 <Link to={`/anime/${animal?.mal_id}`}>
                    <img src={animal.images.jpg.large_image_url} alt={animal.title} />
                </Link>
             
              <p className="anime-title">{animal.title}</p>
              <p className="anime-title">{animal.title_japanese}</p>
            </div>
            ))
          }
          
        </div>
       
    )
}
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LazyLoad from 'react-lazy-load';


const MovieShow = ({ movies }) => {

  const nav = useNavigate();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movies])

  return (

    <div className='grid grid-cols-4 p-4 gap-4 items-start md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1'>

      {movies && movies.results.map((movie) => {
        return <div onClick={() => nav('/movie/detail', {
          state: {
            id: movie.id,
            image: movie.backdrop_path
          }
        })} key={movie.id} className='shadow-xl hover:scale-105 ease-in duration-300 cursor-pointer'>

          <LazyLoad height={470}>
            <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt="" />
          </LazyLoad>



          <div className='p-2'>
            <h1 className='text-2xl font-medium'>{movie.title}</h1>
            <p>{movie.overview.substring(0, 100) + ' ....'}</p>
          </div>



        </div>
      })}




    </div>
  )
}

export default MovieShow
import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetSearchMoviesQuery } from '../features/movieSlice';
import LazyLoad from 'react-lazy-load';


const Search = () => {

  const { searchText } = useParams();
  const { data: movies, isError, isLoading, error } = useGetSearchMoviesQuery(searchText);

  if (isLoading) {
    return <div className='h-[500px]'>
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_a2chheio.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }

  if (movies?.results?.length === 0) {
    return <h1 className='p-5 text-2xl font-semibold'>Try using another keyword...</h1>
  }

  return (
    <div className='grid grid-cols-4 p-4 gap-4 items-start md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1'>
      {movies && movies.results.map((movie) => {
        return <div key={movie.id} className='shadow-xl'>


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

export default Search
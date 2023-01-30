import React from 'react'
import { useParams } from 'react-router-dom'
import MovieShow from '../components/MovieShow';
import { useGetMovieByCategoryQuery } from '../features/movieSlice';

const MovieByCategory = () => {
  const { category } = useParams();

  const { data, isError, isLoading, error } = useGetMovieByCategoryQuery(category);

  if (isLoading) {
    return <div className='h-[500px]'>
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_a2chheio.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }


  return (
    <>
      <MovieShow movies={data} />
    </>
  )
}

export default MovieByCategory
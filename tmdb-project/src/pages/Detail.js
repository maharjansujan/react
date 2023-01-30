import React from 'react'
import { useLocation } from 'react-router-dom'
import { useGetMovieIdQuery } from '../features/movieSlice';

const Detail = () => {
  const { state } = useLocation();

  const { data, isError, isLoading, error } = useGetMovieIdQuery(state.id);


  if (isLoading) {
    return <div className='h-[500px]'>
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_a2chheio.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }


  return (
    <div>
      {data && <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${state.image})`, backgroundRepeat: 'no-repeat' }} className='h-screen absolute top-0 w-full  bg-cover'>
        <iframe className='w-[60%] aspect-video p-5 absolute top-[9%]' src={`https://www.youtube.com/embed/${data?.results[0]?.key}`} allowFullScreen frameBorder="0"></iframe>
      </div>}
    </div>
  )
}

export default Detail
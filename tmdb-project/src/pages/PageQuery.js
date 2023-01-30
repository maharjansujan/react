import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import MovieShow from '../components/MovieShow';
import { useGetMovieByCategoryQuery, useGetMovieByPageQuery } from '../features/movieSlice'

const PageQuery = () => {
  const nav = useNavigate();

  const { state } = useLocation();



  const { data, isError, isLoading, error } = useGetMovieByPageQuery({
    path: state.path,
    page: state.page
  });



  if (isLoading) {
    return <div className='h-[500px]'>
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_a2chheio.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }


  return (
    <>
      <MovieShow movies={data} />

      <div className='flex justify-center items-center space-x-4 pb-2'>

        <button onClick={() => {
          nav(-1);
        }} className='bg-cyan-200 p-2'>Prev Page</button>

        <h1 className='text-xl font-bold'>{data?.page}</h1>
        <button onClick={() => {
          nav(`/movie/${state?.page + 1}`, {
            state: {
              path: 'popular',
              page: state.page + 1
            }
          })
        }} className='bg-cyan-200 p-2'>Next Page</button>
      </div>

    </>
  )
}

export default PageQuery
import React from 'react'
import LazyLoad from 'react-lazy-load';
import { useGetNewsQuery } from '../features/newsSlice'

const News = () => {
  const { data: news, isLoading } = useGetNewsQuery('hollywood');


  if (isLoading) {
    return <div className='h-[500px]'>
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_a2chheio.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }

  return (
    <div className='grid grid-cols-4 p-4 gap-4 items-start md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1'>

      {news && news.articles.map((dat, i) => {
        return <div key={i} className='shadow-xl hover:scale-105 ease-in duration-300 cursor-pointer'>

          <LazyLoad height={190}>
            <img src={`${dat.urlToImage}`} alt="" />
          </LazyLoad>



          <div className='p-2'>
            <h1 className='text-2xl font-medium'>{dat.title}</h1>
            <p>{dat.content.substring(0, 100) + ' ....'}</p>
          </div>



        </div>
      })}




    </div>
  )
}

export default News
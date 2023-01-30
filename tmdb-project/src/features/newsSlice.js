import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



const api_key = 'e526a219312a40a88b575f8738537e06'

export const newsSlice = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://newsapi.org/v2'
  }),
  endpoints: (builder) => ({

    getNews: builder.query({
      query: (query) => ({
        url: '/everything',
        params: {
          'apiKey': api_key,
          'q': query
        },
      })
    }),


  })
})


export const { useGetNewsQuery } = newsSlice;
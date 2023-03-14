import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';;;
export const fooditemApi = createApi({
  reducerPath: 'fooditemApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:4000/' }),
  endpoints: (builder) => ({
    getFoodItems: builder.query({
      query: () => `fooditems`,
    }),
  }),
})

export const { useGetFoodItemsQuery } = fooditemApi
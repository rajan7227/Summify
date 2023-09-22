import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const articleApi = createApi({
    reducerPath: 'articleApi',
    endpoints: (builder)=> ({
        getSummary: builder.query({
            query: (params) => `test`
        })
    })
});

export default articleApi;
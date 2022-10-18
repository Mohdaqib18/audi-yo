import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'




export const shazamCoreApi = createApi(
{
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl : "https://shazam-core.p.rapidapi.com/v1",
        prepareHeaders: (headers) =>{
            headers.set("X-RapidAPI-Key", "552a5ea788msh98e158b277f737cp10b2bejsn6ee75f759a94");

            return headers;
        },
    }),

 endpoints:(builder) => ({
    getTopCharts: builder.query({query: () => "./charts/world"}),
 }),
});


export const{
    useGetTopChartsQuery,

} =  shazamCoreApi;
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit';

const cryptoApiHeaders={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'e3cc45e2cbmsh76a52d1a74ce7f1p1d90eejsnddac5c2e8437'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/exchanges';

const createRequest = (url)=>({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endPoints: (builder)=>({
        getCryptos: builder.query({
            
        })
    })
});
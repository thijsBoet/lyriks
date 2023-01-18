import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
	reducerPath: 'shazamCoreApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
		prepareHeaders: headers => {
			headers.set(
				'X-RapidAPI-Key',
				'a752851246msh53dc65c90c4c05ep1d6192jsnfffddc31ee4d'
			);

			return headers;
		},
    }),
    endpoints: builder => ({
        getTopCharts: builder.query({
            query: () => '/charts/world',
        }),
    }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
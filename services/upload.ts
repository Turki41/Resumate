import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const uploadApi = createApi({
    reducerPath: 'upload',
    baseQuery: fetchBaseQuery({baseUrl:''}),
    endpoints: (builder) => ({
        upload: builder.mutation({
            query: (body) => ({
                url: '/api/upload',
                method: 'POST',
                body
            })
        })
    })
})

export const {useUploadMutation} = uploadApi
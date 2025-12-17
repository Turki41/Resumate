import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const uploadApi = createApi({
    reducerPath: 'upload',
    baseQuery: fetchBaseQuery({baseUrl:process.env.NEXT_PUBLIC_BASE_URL}),
    endpoints: (builder) => ({
        upload: builder.mutation({
            query: (body) => ({
                url: 'upload',
                method: 'POST',
                body
            })
        })
    })
})

export const {useUploadMutation} = uploadApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const aiApi = createApi({
    reducerPath: 'ai',
    baseQuery: fetchBaseQuery({baseUrl: process.env.NEXT_PUBLIC_BASE_URL}),
    endpoints: (builder) => ({
        feedback: builder.mutation({
            query: (body) => ({
                url: 'ai/feedback',
                method: 'POST',
                body: JSON.stringify(body)
            })
        })
    })
})

export const {useFeedbackMutation} = aiApi
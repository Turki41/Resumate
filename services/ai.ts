import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const aiApi = createApi({
    reducerPath: 'ai',
    baseQuery: fetchBaseQuery({baseUrl: ''}),
    endpoints: (builder) => ({
        feedback: builder.mutation({
            query: (body) => ({
                url: '/api/ai/feedback',
                method: 'POST',
                body: JSON.stringify(body)
            })
        })
    })
})

export const {useFeedbackMutation} = aiApi
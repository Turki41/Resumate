import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({baseUrl: process.env.NEXT_PUBLIC_BASE_URL}),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (body) => ({
                url: 'auth/signup',
                method: 'POST',
                body
            })
        }),
        login: builder.mutation({
            query: (body) => ({
                url: 'auth/login',
                method: 'POST',
                body
            })
        })
    })
})

export const {useSignupMutation, useLoginMutation} = authApi
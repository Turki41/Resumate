import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({baseUrl:''}),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (body) => ({
                url: '/api/auth/signup',
                method: 'POST',
                body
            })
        }),
        login: builder.mutation({
            query: (body) => ({
                url: '/api/auth/login',
                method: 'POST',
                body
            })
        }),
        logout: builder.mutation<{message: string}, void>({
            query: () => ({
                url: '/api/auth/logout',
                method: 'POST',
            })
        })
    })
})

export const {useSignupMutation, useLoginMutation, useLogoutMutation} = authApi
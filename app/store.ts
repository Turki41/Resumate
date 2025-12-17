import { aiApi } from '@/services/ai'
import { authApi } from '@/services/auth'
import { uploadApi } from '@/services/upload'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [uploadApi.reducerPath]: uploadApi.reducer,
    [aiApi.reducerPath]: aiApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware, uploadApi.middleware, aiApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
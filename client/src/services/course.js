import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const courseApi = createApi({
    reducerPath: 'courseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/course' }),
    endpoints: (builder) => ({
        getCourse: builder.query({
            query: () => ({
                url: '/'
            }),
        }),
    }),
})

export const { useGetCourseQuery, useGetCourseByIdQuery, useCreateCourseMutation, useUpdateCourseMutation } = courseApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const courseApi = createApi({
    reducerPath: 'courseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: (builder) => ({
        getCourse: builder.query({
            query: () => ('/course'),
        }),
        createCourse:builder.mutation({
            query:(credential)=>({
                url:'/course',
                method:'POST',
                body:credential
            })
        }),
        updateCourse:builder.mutation({
            query:(credential)=>({
                url:`/course/${credential.id}`,
                method:'PUT',
                body:credential
            })
        }),
        deleteCourse:builder.mutation({
            query:(credential)=>({
                url:`/course/${credential.id}`,
                method:'DELETE',
            })
        })
    }),
})

export const { useGetCourseQuery, useCreateCourseMutation, useUpdateCourseMutation, useDeleteCourseMutation } = courseApi
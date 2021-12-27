import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {LOCALHOST, PROD_URL}  from '../../AppConstants';

export const workApiSlicer = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NODE_ENV === "production" ? PROD_URL : LOCALHOST,
  }),
  endpoints(builder) {
    return {
      fetchProjects: builder.query({
        query: () => "api/work",
      }),
    };
  },
});

export const { useFetchProjectsQuery } = workApiSlicer;

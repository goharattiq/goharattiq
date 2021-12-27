import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const workApiSlicer = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    prepareHeaders(headers) {
      headers.set("Access-Control-Allow-Origin", "*");
      return headers;
    },
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

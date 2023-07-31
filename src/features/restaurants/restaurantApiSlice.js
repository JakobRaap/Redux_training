import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const breweryApi = createApi({
  reducerPath: "breweryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.openbrewerydb.org" }),
  endpoints: (builder) => ({
    getBreweriesWithLimit: builder.query({
      query: (limit = 10) => `/breweries?per_page=${limit}`,
    }),
  }),
});
export const { useGetBreweriesWithLimitQuery } = breweryApi;

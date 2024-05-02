import {getFAqApi, getSitePolicyApi } from "../components/constant/Api";
import { myApi } from "./api";

export const sitepolicyApi = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getSitePolicy: builder.query({
      query: () => ({
        url: getSitePolicyApi,
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => {
        return response.status ? response?.data ?? [] :[];
      },
    }),
    getFaq: builder.query({
        query: () => ({
          url: getFAqApi,
          method: "GET",
        }),
        transformResponse: (response, meta, arg) => {
          return response.status ? response?.data ?? [] :[];
        },
      }),
  }),
});

export const { useGetFaqQuery,useGetSitePolicyQuery} = sitepolicyApi;
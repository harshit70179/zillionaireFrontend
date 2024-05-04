import { getFAqApi, getFooterCollectionApi, getSitePolicyApi, getSocialMediaApi } from "../components/constant/Api";
import { myApi } from "./api";

export const sitepolicyApi = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getSitePolicy: builder.query({
      query: () => ({
        url: getSitePolicyApi,
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => {
        return response.status ? response?.data ?? [] : [];
      },
    }),
    getFaq: builder.query({
      query: () => ({
        url: getFAqApi,
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => {
        return response.status ? response?.data ?? [] : [];
      },
    }),
    getFooterCollection: builder.query({
      query: () => ({
        url: getFooterCollectionApi,
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => {
        return response.status ? response?.data ?? [] : [];
      },
    }),
    getSocialMedia: builder.query({
      query: () => ({
        url: getSocialMediaApi,
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => {
        return response.status ? response?.data ?? [] : [];
      },
    }),
  }),
});

export const { useGetFaqQuery, useGetSitePolicyQuery,useGetFooterCollectionQuery,useGetSocialMediaQuery } = sitepolicyApi;
import { getLowerBannerApi, getMiddleBannerApi, getTopBannerApi } from "../components/constant/Api";
import { myApi } from "./api";

export const bannerApi = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getTopBanner: builder.query({
      query: () => ({
        url: getTopBannerApi,
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => {
        return response.status ? response?.data ?? [] :[];
      },
      providesTags: (_) => ["banner"],
    }),
    getMiddleBanner: builder.query({
        query: () => ({
          url: getMiddleBannerApi,
          method: "GET",
        }),
        transformResponse: (response, meta, arg) => {
          return response.status ? response?.data ?? [] :[];
        },
        providesTags: (_) => ["banner"],
      }),
      getLowerBanner: builder.query({
        query: () => ({
          url: getLowerBannerApi,
          method: "GET",
        }),
        transformResponse: (response, meta, arg) => {
          return response.status ? response?.data ?? [] :[];
        },
        providesTags: (_) => ["banner"],
      }),
    
  }),
});

export const {useGetLowerBannerQuery,useGetTopBannerQuery,useGetMiddleBannerQuery } = bannerApi;
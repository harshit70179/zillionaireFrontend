import { getHeaderApi, getHomeproductApi } from "../components/constant/Api";
import { myApi } from "./api";

export const headerApi = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getHeader: builder.query({
      query: () => ({
        url: getHeaderApi,
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => {
        return response.status ? response?.data ?? [] :[];
      },
    }),
    getHomeProduct: builder.query({
      query: () => ({
        url: getHomeproductApi,
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => {
        return response.status ? response?.data ?? [] :[];
      },
    }),
  }),
});

export const { useGetHeaderQuery,useGetHomeProductQuery} = headerApi;
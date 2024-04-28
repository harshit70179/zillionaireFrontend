import {getProductByIdApi, getProductsApi } from "../components/constant/Api";
import { myApi } from "./api";

export const productsApi = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.mutation({
      query: (post) => ({
        url: getProductsApi,
        method: "POST",
        body:post
      }),
      transformResponse: (response, meta, arg) => {
        return response.status ? response?.data ?? [] :[];
      },
    }),
    getProductsById: builder.mutation({
        query: (post) => ({
          url: getProductByIdApi+"/"+post.id,
          method: "GET",
        }),
        transformResponse: (response, meta, arg) => {
          return response.status ? response?.data ?? [] :[];
        },
      }),
  }),
});

export const { useGetProductsMutation,useGetProductsByIdMutation} = productsApi;
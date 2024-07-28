import { addOrderApi, getOrderApi, getOrderPdfApi, successApi } from "../components/constant/Api";
import { myApi } from "./api";

export const orderApi = myApi.injectEndpoints({
  endpoints: (builder) => ({
      setOrder: builder.mutation({
        query: (post) => ({
          url: addOrderApi,
          method: "POST",
          body:post
        }),
        invalidatesTags: (_) => ["banner"],
      }),
      getOrder: builder.query({
        query: () => ({
          url: getOrderApi,
          method: "GET",
        }),
        transformResponse: (response, meta, arg) => {
          return response.status ? response?.data ?? [] :[];
        },
        providesTags: (_) => ["order"],
      }),
      getOrderPdf: builder.mutation({
        query: (post) => ({
          url: getOrderPdfApi+"/"+post.id,
          method: "GET",
        }),
        transformResponse: (response, meta, arg) => {
          return response.status ? response?.data ?? {} :{};
        },
        providesTags: (_) => ["order"],
      }),
      setSuccess: builder.mutation({
        query: (post) => ({
          url:successApi,
          method: "POST",
          body:post
        }),
        providesTags: (_) => ["order"],
      }),
  }),
});

export const { useSetOrderMutation,useGetOrderQuery,useGetOrderPdfMutation,useSetSuccessMutation} = orderApi;
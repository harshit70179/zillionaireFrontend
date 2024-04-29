import { addWishListApi, getUserDetailApi, getWishListApi } from "../components/constant/Api";
import { myApi } from "./api";

export const userApi = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserDetail: builder.query({
      query: () => ({
        url: getUserDetailApi,
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => {
        return response.status ? response?.data[0] ?? {} :{};
      },
    }),
    getWishList: builder.query({
        query: () => ({
          url: getWishListApi,
          method: "GET",
        }),
        transformResponse: (response, meta, arg) => {
          return response.status ? response?.data ?? [] :[];
        },
      }),
      setWishList: builder.mutation({
        query: (post) => ({
          url: addWishListApi,
          method: "POST",
          body:post
        }),
       
      }),
  }),
});

export const { useGetUserDetailQuery,useGetWishListQuery,useSetWishListMutation} = userApi;
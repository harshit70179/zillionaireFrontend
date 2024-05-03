import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../components/constant/BaseUrl'

export const myApi=createApi({
       reducerPath:"myApi",
       baseQuery:fetchBaseQuery({
        baseUrl:baseUrl,
        prepareHeaders: async (headers) => {
         const token = await localStorage.getItem('jwtToken')
         if (!!token) {
             headers.set('Authorization', `Bearer ${token}`)
         }
         return headers
     }
             }),
    tagTypes: ["banner","order"],
       endpoints:(builder)=>({
       }),

})
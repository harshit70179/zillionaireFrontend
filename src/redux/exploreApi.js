import { getExploreApi} from "../components/constant/Api";
import { myApi } from "./api";

export const exploreApi = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getExplore: builder.query({
      query: () => ({
        url: getExploreApi,
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => {
        return response.status ? response?.data ?? [] :[];
      },
    }),
  }),
});

export const {useGetExploreQuery } = exploreApi;
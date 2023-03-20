import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

import { RootState } from "./store";
const query = fetchBaseQuery({
  baseUrl: "http://localhost:5000/",

  prepareHeaders: (headers: Headers, { getState }) => {
    return headers;
  },
});
const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await query(args, api, extraOptions);
  return result;
};

export const mainApi = createApi({
  baseQuery: baseQuery,
  endpoints: () => ({}),
});

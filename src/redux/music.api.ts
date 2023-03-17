import { mainApi } from "./main.api";
import { formValues } from "src/componets/Form";
const apiWithTag = mainApi.enhanceEndpoints({ addTagTypes: ["music"] });

export const musicApi = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    totalMusic: builder.query({
      query: () => `/Totalsong`,
    }),
    fetchMusics: builder.query({
      query: () => "/Getsong",
      providesTags: ["music"],
    }),
    deleteMusic: builder.mutation({
      query: (title: string) => ({
        url: "/Removesong",
        method: "post",
        body: { title },
      }),
      invalidatesTags: ["music"],
    }),
    updateSong: builder.mutation({
      query: (values:formValues) => ({
        url: "/Updatesong",
        method:'put',
        body: {values},
      }),
    }),
    addSong: builder.mutation({
      query: (values:formValues) => ({
        url: "/addsong",
        method:'post',
        body: {values},
      }),
       invalidatesTags: ["music"],
    }),
  }),
});
export const {
  useFetchMusicsQuery,
  useDeleteMusicMutation,
  useTotalMusicQuery,
  useUpdateSongMutation,
  useAddSongMutation
} = musicApi;

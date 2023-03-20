import { mainApi } from "./main.api";
import { formValues } from "src/componets/Form";
const apiWithTag = mainApi.enhanceEndpoints({ addTagTypes: ["music",'de'] });

export const musicApi = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    totalMusic: builder.query({
      query: () => `/Totalsong`,
    }),
    fetchMusics: builder.query({
      query: () => "/Getsong",
      providesTags: ["music",'de'],
    }),
    deleteMusic: builder.mutation({
      query: (title: string) => ({
        url: "/Removesong",
        method: "POST",
        body: { title },
      }),
      invalidatesTags: ["de"],
      // window.location.reload(),
    }),
    updateSong: builder.mutation({
      query: (values:formValues) => ({
        url: "/Updatesong",
        method:'POST',
        body: {values},
      }),
      invalidatesTags: ["music"],
    }),
    statSong: builder.query({
      query: () => "/genre",
    }),
    addSong: builder.mutation({
      query: (values:formValues) => ({
        url: "/addsong",
        method:'POST',
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
  useStatSongQuery,
  useUpdateSongMutation,
  useAddSongMutation
} = musicApi;

import * as Yup from "yup";

export const NewMusicSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  artist: Yup.string().required("Required"),
  album: Yup.string().required("Required"),
  genre: Yup.string().required("Required"),
});

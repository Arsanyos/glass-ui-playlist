import { Formik } from "formik";
import { useAddSongMutation, useUpdateSongMutation } from "src/redux/music.api";
import { NewMusicSchema } from "../schema/music.schema";
import styles from "../styles/common.module.css";
import {
  ErrorDisplay,
  FormContainer,
  FormControl,
  Header,
  InputFields,
  InputLable,
  SaveButton,
  SelectField,
} from "../styles/styles";
// import Loading from "./Loading";
import { Dispatch, SetStateAction } from "react";
import { toast, ToastContainer } from "react-toastify";
import Loading from "./Loading";
export interface formValues {
  id: string | undefined;
  title: string | undefined;
  album: string | undefined;
  artist: string | undefined;
  genre: string | undefined;
}
const Form = ({
  tobeUpdated,
  setOpenform,
}: {
  tobeUpdated: formValues | undefined;
  setOpenform: Dispatch<SetStateAction<boolean>>;
}) => {
  const [addMusic, { isLoading: addLoading }] = useAddSongMutation({});
  const [updateMusic, { isLoading: updateLoading }] = useUpdateSongMutation({});

  const handleAdd = (values: formValues) => {
    addMusic(values)
      .unwrap()
      .then(() => {
        toast.success("Music added successfully");
        setOpenform(false);
      })
      .catch(() => {
        toast.error("Error when adding music");
      });
  };
  const handleUpdate = (values: formValues) => {
    console.log(values);
    
    updateMusic(values)
      .unwrap()
      .then(() => {
        toast.success("Music Updated successfully");
        setOpenform(false);
      })
      .catch(() => {
        toast.error("Error when updating music");
      });
  };
  const initialValues = {
    id: tobeUpdated?.id,
    title: tobeUpdated?.title,
    artist: tobeUpdated?.artist,
    album: tobeUpdated?.album,
    genre: tobeUpdated?.genre,
  };
  return (
    <div>
      {/* <ToastContainer /> */}
      <Header style={{ marginLeft: "10px", fontSize: "2em" }}>
        Add new music
      </Header>
      <Formik
        initialValues={initialValues}
        initialErrors={{ title: "" }}
        validationSchema={NewMusicSchema}
        onSubmit={() => {
          // console.log('asd')
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, resetForm }) => (
          <form>
            <FormContainer>
              <FormControl>
                <InputLable>Title</InputLable>
                <InputFields
                  type="text"
                  name="title"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.title}
                  style={{
                    padding: "0px",
                    margin: "0px",
                  }}
                />
                {touched.title && <ErrorDisplay>{errors.title}</ErrorDisplay>}
              </FormControl>
              <FormControl>
                <InputLable>Artist</InputLable>
                <InputFields
                  type="text"
                  name="artist"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.artist}
                  style={{
                    padding: "0px",
                    margin: "0px",
                  }}
                />
                {touched.artist && <ErrorDisplay>{errors.artist}</ErrorDisplay>}
              </FormControl>
              <FormControl>
                <InputLable>Album</InputLable>
                <InputFields
                  type="text"
                  name="album"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.album}
                  style={{
                    padding: "0px",
                    margin: "0px",
                  }}
                />
                {touched.album && <ErrorDisplay>{errors.album}</ErrorDisplay>}
              </FormControl>
              <FormControl>
                <InputLable>Genre</InputLable>
                <SelectField
                  name="genre"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.genre}
                  style={{
                    padding: "0px",
                    margin: "0px",
                  }}
                >
                  <option selected disabled></option>
                  <option>pop</option>
                  <option>rock</option>
                  <option>alternative</option>
                  <option>RnB</option>
                  <option>hipHop</option>
                  <option>classical</option>
                  </SelectField>
                {touched.genre && <ErrorDisplay>{errors.genre}</ErrorDisplay>}
              </FormControl>

              <SaveButton
                id="save-button"
                className={styles.saveButton}
                type="submit"
                // disabled={Object.keys(errors).length > 0 ? true : false}
                onClick={(e) => {
                  const inner: string =
                    document.getElementById("save-button")!.innerHTML;
                  e.preventDefault();
                  if (inner === "Save") {
                    handleAdd(values);
                    resetForm();
                  } else if (inner === "Update") {
                    handleUpdate(values);
                    resetForm();
                  } else {
                  }
                }}
              >
                {updateLoading || addLoading ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Loading />
                  </div>
                ) : tobeUpdated ? (
                  "Update"
                ) : (
                  "Save"
                )}
              </SaveButton>
            </FormContainer>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default Form;

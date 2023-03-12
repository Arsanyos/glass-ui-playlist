import { Header } from "../styles/styles";
import { Formik } from "formik";
import { NewMusicSchema } from "../schema/music.schema";
import {
  InputFields,
  InputLable,
  FormControl,
  ErrorDisplay,
  FormContainer,
  SaveButton,
} from "../styles/styles";
const Form = () => {
  const handleSubmit = (values: {
    title: string;
    album: string;
    artist: string;
    genre: string;
  }) => {
    console.log(values);
  };
  const initialValues = {
    title: "",
    artist: "",
    album: "",
    genre: "",
  };
  return (
    <div>
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
        {({ values, errors, touched, handleChange, handleBlur }) => (
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
                <InputFields
                  type="text"
                  name="genre"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.genre}
                  style={{
                    padding: "0px",
                    margin: "0px",
                  }}
                />
                {touched.genre && <ErrorDisplay>{errors.genre}</ErrorDisplay>}
              </FormControl>
              <SaveButton
                disabled={Object.keys(errors).length > 0 ? true : false}
                onClick={() => {
                  handleSubmit(values);
                }}
              >
                Save
              </SaveButton>
            </FormContainer>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default Form;

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import {
  useDeleteMusicMutation,
  useFetchMusicsQuery,
} from "src/redux/music.api";
import styles from "../../styles/common.module.css";
import {
  MenuContainer,
  MenuItems,
  Table,
  TableData,
  TableHead,
  TableRow,
} from "../../styles/styles";
// import Loading from "../Loading";
import { AiFillDelete } from "react-icons/ai";
import { RxUpdate } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import { formValues } from "../Form";
import "react-toastify/dist/ReactToastify.css";
interface mus {

  _id: string;
  Title: string;
  Album: string;
  Artist: string;
  Genre: string;
}
const MusicTable = ({
  setToBeUpdated,
  setOpenform,
}: {
  setToBeUpdated: Dispatch<SetStateAction<formValues | undefined>>;
  setOpenform: Dispatch<SetStateAction<boolean>>;
}) => {
  const current = useRef({
    option: "0",
  });
  const { data } = useFetchMusicsQuery({});
  const [deletMusic, { isLoading: deleteLoading }] = useDeleteMusicMutation({});
  const Update = (values: formValues) => {
    setToBeUpdated(values);
  };
  const Delete = (title: string) => {
    deletMusic(title).then(() => {
      console.log("sdsd");
      toast.success("Music de successfully");
    }).catch(() => {
      toast.error("Error when adding music");
    });
    window.location.reload()
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const tableHead: Array<{ label: string; id: string }> = [
    {
      label: "#",
      id: "1",
    },
    {
      label: "Title",
      id: "2",
    },
    {
      label: "Album",
      id: "3",
    },
    {
      label: "Genre",
      id: "4",
    },
    {
      label: "",
      id: "5",
    },
  ];
  useEffect(() => {
    console.log("dataaaa", data);
  }, [data]);
  return (
    <div
      style={{
        height: "80%",
        marginTop: "30px",
        overflow: "scroll",
        overflowX: "hidden",
      }}
    >
      <ToastContainer />
      <Table cellPadding={"0"} cellSpacing={"0"} className="table">
        <thead>
          <TableRow
            style={{
              boxShadow: "0px 1px 0px 0px #ccc",
              borderRadius: "18px 18px 0px 0px",
            }}
          >
            {tableHead.map((item) => {
              return (
                <TableHead style={{ width: "auto" }} scope="col">
                  {item.label}
                </TableHead>
              );
            })}
          </TableRow>
        </thead>
        <tbody style={{ height: "auto" }}>
          {data &&
            data.map((item: mus, index: number) => {
              return (
                <TableRow key={index}>
                  <TableData align="left" scope="row" style={{ width: "5%" }}>
                    {index + 1}
                  </TableData>
                  <TableData
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignContent: "center",
                      justifyContent: "center",
                      width: "150px",
                      marginTop: "22px",
                    }}
                  >
                    <span style={{ fontWeight: "500" }}>{item.Title}</span>
                    <span
                      style={{
                        fontSize: ".6em",
                        lineHeight: "10px",
                        position: "relative",
                        bottom: "0.7em",
                      }}
                    >
                      {item.Artist}
                    </span>
                  </TableData>
                  <TableData>
                    <span style={{ fontSize: "0.9em" }}>{item.Album}</span>
                  </TableData>
                  <TableData>{item.Genre}</TableData>

                  <TableData
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100px",
                    }}
                    className={styles.menuItem}
                    onClick={() => {
                      setMenuOpen(!menuOpen);
                      current.current.option = item._id;
                    }}
                  >
                    <MenuContainer
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignContent: "center",
                        gap: "1.5em",
                      }}
                    >
                      <RxUpdate
                        color="rgb(40,185,190)"
                        size={"1.5em"}
                        onClick={() => {
                          const val: formValues = {
                            id: item._id,
                            title: item.Title,
                            artist: item.Artist,
                            album: item.Album,
                            genre: item.Genre,
                          };
                          Update(val);
                          setOpenform((prev) => !prev);
                        }}
                      />

                      <AiFillDelete
                        color="crimson"
                        size={"1.5em"}
                        onClick={() => Delete(item._id)}
                      />
                    </MenuContainer>
                  </TableData>
                </TableRow>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};
export default MusicTable;

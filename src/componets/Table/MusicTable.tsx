import {
  TableHead,
  TableData,
  TableRow,
  Table,
  MenuContainer,
  MenuItems,
} from "../../styles/styles";
import styles from "../../styles/common.module.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../../node_modules/axios/index";
import React, { Dispatch, SetStateAction, useRef } from "react";
import {
  useFetchMusicsQuery,
  useDeleteMusicMutation,
  useTotalMusicQuery,
  useUpdateSongMutation
} from "src/redux/music.api";
// import Loading from "../Loading";
import { formValues } from "../Form";
interface mus {
  Title: string;
  Album: string;
  Artist: string;
  Genre: string;
  _id: string;
}
const MusicTable = ({
  setToBeUpdated,
}: {
  setToBeUpdated: Dispatch<SetStateAction<formValues | undefined>>;
}) => {
  const current = useRef({
    option: "0",
  });
  const { data } = useFetchMusicsQuery({});
  const [updateMusic, { isLoading }] = useUpdateSongMutation({});
  const [deletMusic, { isLoading: deleteLoading }] = useDeleteMusicMutation({});
  const Update = (values: formValues) => {
    setToBeUpdated(values);
    updateMusic(values)
      .unwrap()
      .then(() => {
        alert("Item updated successfully");
      })
      .catch(() => {
        console.log('Error when updateing item');
      });
  };
  const Delete = (title: string) => {
    deletMusic(title)
      .unwrap()
      .then(() => {
        alert("Item deleted successfully");
      })
      .catch(() => {
        console.log();
      });
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
    console.log(data);
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
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <p style={{ fontWeight: "600" }}>{item.Title}</p>
                    <p
                      style={{
                        fontSize: ".6em",
                        lineHeight: "10px",
                        position: "relative",
                        bottom: "0.7em",
                      }}
                    >
                      {item.Artist}
                    </p>
                  </TableData>
                  <TableData>{item.Album}</TableData>
                  <TableData>{item.Genre}</TableData>

                  <TableData
                    style={{
                      fontSize: "1.5em",
                      fontWeight: "600",
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
                    <div
                      id={item._id}
                      key={item._id}
                      style={{
                        display:
                          menuOpen && current.current.option === item._id
                            ? "block"
                            : "none",
                        zIndex: "2",
                      }}
                    >
                      <MenuContainer>
                        <MenuItems
                          onClick={() => {
                            const val:formValues = {
                              title: item.Title,
                              artist: item.Artist,
                              album: item.Album,
                              genre: item.Genre,
                            };
                            Update(val);
                          }}
                          color="rgba(0,255,0,0.4)"
                        >
                          U
                        </MenuItems>
                        <MenuItems
                          color="rgba(220,20,60,0.7)"
                          onClick={() => Delete(item._id)}
                        >
                          {deleteLoading ? 'loading' : "D"}
                        </MenuItems>
                      </MenuContainer>
                    </div>
                    <div style={{ position: "absolute" }}>...</div>
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

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
import axios from "axios";



const MusicTable = () => {
  const [music, setMusic] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("http://localhost:5000/Getsong");
      console.log("pro", data.data);
      setMusic(data.data);

    };

    fetchdata();
  }, [])
  const Delete = (Title) => {
    if (window.confirm("Are you sure that you want to delete that account?")) {
      axios.delete("http://localhost:5000/Removesong/", {
        body: JSON.stringify({
          Title
        }),
      });
      toast.success("Contact is deleted succesfully");
      setTimeout(() => loadData(), 500);

    } else {
    }
  };

   const [menuOpen, setMenuOpen] = useState(false);
  const tableHead = [
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
  return (
    <div style={{ marginTop: "30px" }}>
      <Table
        cellPadding={"0"}
        cellSpacing={"0"}
        className="table"
        style={{ width: "100%" }}
      >
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
        <tbody>
          {music.map((item,index) => {
            return (
          <TableRow>
            <TableData align="left" scope="row" style={{ width: "5%" }}>
                  {index + 1}
            </TableData>
            <TableData style={{ display: "flex", flexDirection: "column" }}>
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
              }}
            >
              <div
                style={{
                  background: "red",
                  display: menuOpen ? "block" : "none",
                }}
              >
                <MenuContainer>
                  <MenuItems color="rgba(0,255,0,0.4)">Update</MenuItems>
                      <MenuItems color="rgba(220,20,60,0.7)" 
                      onClick={() => Delete(item.Title)}
                        >Delete</MenuItems>
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

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
const MusicTable = () => {
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
      label: "Duration",
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
          <TableRow>
            <TableData align="left" scope="row" style={{ width: "5%" }}>
              1
            </TableData>
            <TableData style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontWeight: "600" }}>Redemtion Song</p>
              <p
                style={{
                  fontSize: ".6em",
                  lineHeight: "10px",
                  position: "relative",
                  bottom: "0.7em",
                }}
              >
                Dennis Brown
              </p>
            </TableData>
            <TableData>Small Man</TableData>
            <TableData>4:10</TableData>
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
              <div hidden={menuOpen} style={{background:"red"}}>

              <MenuContainer>
                <MenuItems color="rgba(0,255,0,0.4)">Update</MenuItems>
                <MenuItems color="rgba(220,20,60,0.7)">Delete</MenuItems>
              </MenuContainer>
                </div>
                <div style={{position:'absolute'}}>

              ...
                </div>
            </TableData>
          </TableRow>
        </tbody>
      </Table>
    </div>
  );
};
export default MusicTable;

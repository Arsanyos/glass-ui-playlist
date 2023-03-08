import { TableHead, TableData, TableRow, Table,Divider } from "../../styles/styles";
const MusicTable = () => {
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
          <TableRow style={{boxShadow:'0px 1px 0px 0px #ccc',borderRadius:'18px 18px 0px 0px'}}>
            {tableHead.map((item) => {
              return <TableHead scope="col">{item.label}</TableHead>;
            })}
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableData align="left" scope="row">
              1
            </TableData>
            <TableData style={{ display: "flex", flexDirection: "column" }}>
              <p style={{}}>Do it again</p>
              <p style={{ fontSize: ".6em", lineHeight: "10px" }}>NLE Choppa</p>
            </TableData>
            <TableData>Otto</TableData>
            <TableData>asdasd</TableData>
            <TableData>...</TableData>
          </TableRow>
          <TableRow>
            <TableData align="left" scope="row"  style={{width:"5%"}}>
              2
            </TableData>
            <TableData style={{ display: "flex", flexDirection: "column" }}>
              <p style={{}}>Do it again</p>
              <p style={{ fontSize: ".6em", lineHeight: "10px" }}>NLE Choppa</p>
            </TableData>
            <TableData>Otto</TableData>
            <TableData>asdasd</TableData>
            <TableData>...</TableData>
          </TableRow>
        </tbody>
      </Table>
    </div>
  );
};
export default MusicTable;

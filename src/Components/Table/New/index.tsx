import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Domine } from "next/font/google";
import PaginationOutlined from "./Pagination";
// import { Column } from "@/src/View/Admin/UserManagement/Lecturers";

const domine = Domine({
  subsets: ["latin"],
  weight: "600",
});

interface Column {
  label: string;
  field: string;
  minWidth?: number;
  align?: "right" | "center";
  format?: (value: number) => string;
}

interface StickyHeadTableProps<T> {
  dataUsers: T[];
  columns: Column[];
}

export default function StickyHeadTable<T>({
  dataUsers,
  columns,
}: StickyHeadTableProps<T>) {
  // const [page, setPage] = React.useState(0);
  const [dataRows, setDataRows] = React.useState<T[]>([]);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  React.useEffect(() => {
    setDataRows(dataUsers);
  }, [dataUsers]);

  console.log("==================data=row=================");
  console.log(dataRows);
  console.log("====================================");

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        height: "100%",
        position: "relative",
      }}
      elevation={0}
    >
      <TableContainer sx={{ maxHeight: "92%", paddingX: "10px" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, i) => (
                <TableCell
                  key={i}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: "bold" }}
                  className={domine.className}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataRows.map((row) => {
              return (
                <TableRow hover key={row.id}>
                  {/* <TableRow hover key={i}> */}
                  {columns.map((column, i) => {
                    return (
                      <TableCell
                        key={i}
                        align={column.align}
                        sx={{ fontSize: "0.8em" }}
                        className={domine.className}
                      >
                        {row[column.field]}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationOutlined />
    </Paper>
  );
}

import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Domine } from "next/font/google";
import PaginationOutlined from "./pagination";
import { Box, Pagination, Stack } from "@mui/material";

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

const columns: readonly Column[] = [
  { label: "Nim", field: "nim", minWidth: 170 },
  { label: "Name", field: "name", minWidth: 170 },
  { label: "Email", field: "email", minWidth: 170 },
  { label: "Date Of Birth", field: "date_of_birth", minWidth: 170 },
  { label: "Entry Year", field: "entry_year", minWidth: 100 },
  { label: "Semester", field: "semester", minWidth: 80 },
  { label: "Major", field: "major", minWidth: 100 },
  { label: "Status", field: "status", minWidth: 80 },
];

interface StickyHeadTableProps {
  dataUsers: UserData[];
}

interface UserData {
  id: number;
  nim: number;
  email: string;
  name: string;
  entry_year: number;
  date_of_birth: string;
  major: string;
  semester: number;
  status: string;
  [key: string]: string | number;
}

export default function StickyHeadTable({ dataUsers }: StickyHeadTableProps) {
  // const [page, setPage] = React.useState(0);
  const [dataRows, setDataRows] = React.useState<UserData[]>([]);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // const handleChangePage = (event: unknown, newPage: number) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  React.useEffect(() => {
    setDataRows(dataUsers);
  }, [dataUsers]);

  // const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
  //   console.log("====================================");
  //   console.log(value);
  //   console.log("====================================");
  // };

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
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        // count={rows.length}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}

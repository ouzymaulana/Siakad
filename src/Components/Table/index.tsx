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
import StudentAndLecturerTable from "./ActionTable/StudentAndLecturerTable";

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
  { label: "Nim", field: "nim", minWidth: 100 },
  { label: "Name", field: "name", minWidth: 170 },
  { label: "Email", field: "email", minWidth: 170 },
  { label: "Date Of Birth", field: "date_of_birth", minWidth: 170 },
  { label: "Entry Year", field: "entry_year", minWidth: 100 },
  { label: "Semester", field: "semester", minWidth: 80 },
  { label: "Major", field: "major", minWidth: 100 },
  { label: "Status", field: "status", minWidth: 80 },
  { label: "Action", field: "action", minWidth: 50 },
];

interface StickyHeadTableProps {
  dataUsers: UserData[];
}

interface UserData {
  id: string;
  nim: string;
  email: string;
  name: string;
  entry_year: string;
  date_of_birth: string;
  major: string;
  semester: string;
  status: string;
  [key: string]: string | number;
}

export default function StickyHeadTable({ dataUsers }: StickyHeadTableProps) {
  // const [page, setPage] = React.useState(0);
  const [dataRows, setDataRows] = React.useState<UserData[]>([]);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // const handleChangeRowsPerPage = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  React.useEffect(() => {
    setDataRows(dataUsers);
  }, [dataUsers]);

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
            {dataRows.map((user, i) => {
              return (
                <TableRow hover key={i}>
                  {columns.map((column, i) => {
                    return (
                      <TableCell
                        key={i}
                        align={column.align}
                        sx={{ fontSize: "0.8em" }}
                        className={domine.className}
                      >
                        {user[column.field]}
                        {column.field === "action" && (
                          <StudentAndLecturerTable
                            dataStudentOrLecturer={user}
                          />
                        )}
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

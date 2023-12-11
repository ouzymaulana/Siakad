import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Domine } from "next/font/google";
import PaginationOutlined from "./../Pagination";
import KrsActionTable from "../ActionTable/KrsActionTable";

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
  { label: "Course", field: "course", minWidth: 100 },
  { label: "Lecturer", field: "lecturer", minWidth: 170 },
  { label: "Major", field: "prodi", minWidth: 170 },
  { label: "Semester", field: "semester", minWidth: 170 },
  { label: "Kuota", field: "kuota", minWidth: 100 },
  { label: "Action", field: "action", minWidth: 50 },
];

interface StickyHeadTableProps {
  dataKrs: KrsData[];
}

interface KrsData {
  id: string;
  course: string;
  lecturer: string;
  prodi: string;
  semester: string;
  kuota: string;
  [key: string]: string | number;
}

export default function KrsManagementTable({ dataKrs }: StickyHeadTableProps) {
  const [dataRows, setDataRows] = React.useState<KrsData[]>([]);

  React.useEffect(() => {
    setDataRows(dataKrs);
  }, [dataKrs]);

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        maxHeight: "100%",
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
            {dataRows.map((krs, i) => {
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
                        {krs[column.field]}
                        {column.field === "action" && (
                          <KrsActionTable dataKrs={krs} />
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

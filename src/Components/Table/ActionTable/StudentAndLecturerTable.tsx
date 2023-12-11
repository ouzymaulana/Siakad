import { Grid, IconButton } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import { useActionModal } from "@/src/Context/ActionTableContextProvider";
import { deleteStudentAlert } from "@/src/Helper/DeleteData/DeleteStudentData";
import { useDispatch } from "react-redux";
import { deleteDataStudent } from "@/src/Redux/Admin/StudentsDataSlice";
import { usePathname } from "next/navigation";
import { deleteLecturerOrStaffAlert } from "@/src/Helper/DeleteData/DeleteLectureOrStaff";
import { deleteDataLecturersAndStaff } from "@/src/Redux/Admin/LecturersAndStaffDataSlice";

// interface StudentAndLecturerTableProps<T = unknown> {
//   dataStudentOrLecturer: T[];
// }
interface StudentAndLecturerTableProps {
  dataStudentOrLecturer: any;
}

// interface UserData {
//   id: string;
//   nim: string;
//   email: string;
//   name: string;
//   entry_year: string;
//   date_of_birth: string;
//   major: string;
//   semester: string;
//   status: string;
//   [key: string]: string | number;
// }

export default function StudentAndLecturerTable({
  dataStudentOrLecturer,
}: StudentAndLecturerTableProps) {
  const { openActionTable, setOpenActionTable } = useActionModal();
  const dispatch = useDispatch();
  const pathname = usePathname();

  const handleUpdateData = () => {
    if (pathname === "/admin/user-management/lecturers") {
      setOpenActionTable({
        ...openActionTable,
        isOpenUpdateDataLecture: true,
        data: dataStudentOrLecturer,
      });
    } else {
      setOpenActionTable({
        ...openActionTable,
        isOpenUpdateData: true,
        data: dataStudentOrLecturer,
      });
    }
  };

  const handleDeleteData = () => {
    if (pathname === "/admin/user-management/lecturers") {
      deleteLecturerOrStaffAlert({
        dispatch,
        deleteDataLecturersAndStaff,
        nrp: dataStudentOrLecturer.nrp,
      });
    } else {
      deleteStudentAlert({
        dispatch,
        deleteDataStudent,
        nim: dataStudentOrLecturer.nim,
      });
    }
  };

  return (
    <Grid>
      <IconButton aria-label="delete" size="small" onClick={handleUpdateData}>
        <BorderColorRoundedIcon fontSize="small" sx={{ fontSize: 17 }} />
      </IconButton>
      <IconButton aria-label="delete" size="small" onClick={handleDeleteData}>
        <DeleteIcon sx={{ fontSize: 17 }} />
      </IconButton>
    </Grid>
  );
}

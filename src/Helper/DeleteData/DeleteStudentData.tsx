import { pink, purple } from "@mui/material/colors";
import axios from "axios";
import Swal from "sweetalert2";
// import { alertHandleStatus } from "..";

interface isConfirmedDeleteProps {
  dispatch: (action: any) => void;
  deleteDataStudent: (payload: any) => void;
  nim: string;
}

export async function isConfirmedDelete({
  dispatch,
  deleteDataStudent,
  nim,
}: isConfirmedDeleteProps) {
  try {
    const response = await axios.delete(
      "http://localhost:5000/api/Student/delete",
      {
        data: { nim },
      }
    );

    if (response.data.status === "success") {
      dispatch(deleteDataStudent(nim));
      // alertHandleStatus("Deleted!", "Your Menu has been deleted.", "success");
    }
  } catch (error) {
    console.error(error);
  }
}

export function deleteStudentAlert({
  dispatch,
  deleteDataStudent,
  nim,
}: isConfirmedDeleteProps) {
  Swal.fire({
    title: "Are you sure?",
    text: "you want to delete this data!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: purple[200],
    cancelButtonColor: pink[300],
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      isConfirmedDelete({ dispatch, deleteDataStudent, nim });
    }
  });
}

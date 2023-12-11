import { pink, purple } from "@mui/material/colors";
import axios from "axios";
import Swal from "sweetalert2";
// import { alertHandleStatus } from "..";

interface isConfirmedDeleteProps {
  dispatch: (action: any) => void;
  deleteDataLecturersAndStaff: (payload: any) => void;
  nrp: string;
}

export async function isConfirmedDelete({
  dispatch,
  deleteDataLecturersAndStaff,
  nrp,
}: isConfirmedDeleteProps) {
  try {
    const response = await axios.delete(
      "http://localhost:5000/api/lecturer/delete",
      {
        data: { nrp },
      }
    );

    if (response.data.status === "success") {
      dispatch(deleteDataLecturersAndStaff(nrp));
      // alertHandleStatus("Deleted!", "Your Menu has been deleted.", "success");
    }
  } catch (error) {
    console.error(error);
  }
}

export function deleteLecturerOrStaffAlert({
  dispatch,
  deleteDataLecturersAndStaff,
  nrp,
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
      isConfirmedDelete({ dispatch, deleteDataLecturersAndStaff, nrp });
    }
  });
}

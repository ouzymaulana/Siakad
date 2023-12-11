import { pink, purple } from "@mui/material/colors";
import axios from "axios";
import Swal from "sweetalert2";

interface isConfirmedDeleteProps {
  dispatch: (action: any) => void;
  deleteDataKrs: (payload: any) => void;
  id: number;
}

export async function isConfirmedDelete({
  dispatch,
  deleteDataKrs,
  id,
}: isConfirmedDeleteProps) {
  try {
    const response = await axios.delete(
      "http://localhost:5000/api/krs/delete",
      {
        data: { id },
      }
    );

    if (response.data.status === "success") {
      dispatch(deleteDataKrs(id));
    }
  } catch (error) {
    console.error(error);
  }
}

export function deleteDataKrsAlert({
  dispatch,
  deleteDataKrs,
  id,
}: isConfirmedDeleteProps) {
  console.log("=========id===========================");
  console.log(id);
  console.log("====================================");
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
      isConfirmedDelete({ dispatch, deleteDataKrs, id });
    }
  });
}

import { Grid, IconButton } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import { useActionModal } from "@/src/Context/ActionTableContextProvider";
import { useDispatch } from "react-redux";
import { deleteDataKrs } from "@/src/Redux/Admin/KrsDataSlice";
import { deleteDataKrsAlert } from "@/src/Helper/DeleteData/DeleteKrs";

interface StudentAndLecturerTableProps {
  dataKrs: any;
}

export default function KrsActionTable({
  dataKrs,
}: StudentAndLecturerTableProps) {
  const { openActionTable, setOpenActionTable } = useActionModal();
  const dispatch = useDispatch();

  const handleUpdateData = () => {
    setOpenActionTable({
      ...openActionTable,
      isOpenUpdateKrs: true,
      data: dataKrs,
    });
  };

  const handleDeleteData = () => {
    deleteDataKrsAlert({
      dispatch,
      deleteDataKrs,
      id: dataKrs.id,
    });
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

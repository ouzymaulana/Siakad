import { Box, Modal, Typography } from "@mui/material";
import React from "react";

const style = {
  marginTop: "5rem",
  bgcolor: "background.paper",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

export default function FormModal({
  children,
  open,
}: {
  children: React.ReactNode;
  open: boolean;
}) {
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={style} width={{ lg: 600, md: 600, sm: 500, xs: 360 }}>
        <Box display={"flex"} justifyContent={"center"}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            fontWeight={600}
            component="h5"
            paddingBottom={3}
          >
            Create New Data User
          </Typography>
        </Box>
        {children}
      </Box>
    </Modal>
  );
}

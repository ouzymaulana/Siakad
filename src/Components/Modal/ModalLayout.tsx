import { Box, Modal, Typography } from "@mui/material";
import React from "react";

const style = {
  marginTop: "5rem",
  bgcolor: "background.paper",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

interface ModalLayoutProps {
  children: React.ReactNode;
  open: boolean;
  title: string;
}

export default function ModalLayout({
  children,
  open,
  title,
}: ModalLayoutProps) {
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
            component="h2"
            paddingBottom={3}
          >
            {title}
          </Typography>
        </Box>
        {children}
      </Box>
    </Modal>
  );
}

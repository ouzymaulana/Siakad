import { Box, Button } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";

interface ButtonModalProps {
  disable: boolean;
  handleClose: () => void;
  resetInput: () => void;
}

export default function ModalFormButton({
  disable,
  handleClose,
  resetInput,
}: ButtonModalProps) {
  return (
    <Box display={"flex"} gap={2} marginTop={2}>
      <Button
        size="medium"
        onClick={() => {
          handleClose();
          resetInput();
        }}
        variant="contained"
        sx={{
          backgroundColor: "#212A3E",
          color: "white",
          borderRadius: "10px",
          fontSize: { lg: "0.8em", xs: "10px" },
          ":hover": {
            bgcolor: "#191825",
          },
        }}
      >
        cancel
      </Button>
      <Button
        disableElevation
        type="submit"
        disabled={disable}
        variant="contained"
        size="medium"
        sx={{
          backgroundColor: purple[100],
          color: "black",
          borderRadius: "10px",
          fontSize: { lg: "0.8em", xs: "10px" },
          ":hover": {
            bgcolor: purple[200],
          },
        }}
      >
        Submit
      </Button>
    </Box>
  );
}

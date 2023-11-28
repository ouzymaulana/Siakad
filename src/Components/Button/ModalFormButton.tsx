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
          // padding: "10px",
          backgroundColor: "#212A3E",
          // width: "70%",
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
          // padding: "10px",
          // width: "100%",
          backgroundColor: purple[100],
          color: "black",
          borderRadius: "10px",
          fontSize: { lg: "0.8em", xs: "10px" },
          ":hover": {
            bgcolor: "#FAA41A",
          },
        }}
      >
        Submit
      </Button>
    </Box>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { purple } from "@mui/material/colors";

interface FloatingAddButtonProps {
  handleClick: () => void;
}

export default function FloatingAddButton({
  handleClick,
}: FloatingAddButtonProps) {
  return (
    <Box position={"absolute"} right={80} bottom={70}>
      <Fab
        onClick={handleClick}
        style={{ backgroundColor: purple[100] }}
        aria-label="add"
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}

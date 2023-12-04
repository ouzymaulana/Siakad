import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useAlertMessage } from "@/src/Context/Alert/AlertContextProvider";
import copy from "copy-to-clipboard";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  }
);

interface SnackbarsAlertProps {
  verification_code: string;
}

export default function SnackbarsAlert({
  verification_code,
}: SnackbarsAlertProps) {
  const { alertMessage, setAlertMessage } = useAlertMessage();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertMessage({
      ...alertMessage,
      isOpen: false,
      message: null,
    });
  };

  const handleCopyVerificationCode = () => {
    copy(verification_code);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={alertMessage.isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          <Box>{alertMessage.message}</Box>
          {verification_code && (
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={1}
            >
              <Typography variant="caption">{verification_code}</Typography>
              <Tooltip title={"copy"}>
                <IconButton onClick={() => handleCopyVerificationCode()}>
                  <ContentCopyRoundedIcon
                    fontSize="small"
                    sx={{ color: "white" }}
                  />
                </IconButton>
              </Tooltip>
            </Box>
          )}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

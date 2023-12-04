import { Box, MenuItem, TextField, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: grey[500],
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: grey[600],
      borderRadius: "6px",
      borderWidth: 2,
      width: "100%",
      size: "small",
    },
    "&:hover fieldset": {
      borderColor: grey[600],
    },
    "&.Mui-focused fieldset": {
      borderColor: grey[600],
    },
  },
});

interface propsInputForm {
  title: string;
  label: string;
  multiline?: boolean;
  select?: boolean;
  value: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dataError: string;
  touched: boolean;
  dataSelect?: Array<string>;
  dateType?: boolean;
  // handleChangeFile?: (file: File) => void;
  isImageFailed?: string;
}

export default function InputForm({
  title,
  label,
  multiline,
  select,
  value,
  onchange,
  dataError,
  touched,
  dataSelect,
  dateType,
  isImageFailed,
}: propsInputForm) {
  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = event.target.files;

  //   if (files && files.length > 0 && handleChangeFile) {
  //     handleChangeFile(files[0]);
  //   }
  // };
  return (
    <Box display={"flex"} flexDirection={"column"}>
      {dateType === true ? (
        <CssTextField
          type="date"
          size="small"
          name={title}
          autoComplete="off"
          onChange={onchange}
        />
      ) : multiline === true ? (
        <CssTextField
          multiline
          name={title}
          label={label}
          autoComplete="off"
          rows={4}
          value={value}
          onChange={onchange}
        />
      ) : select === true ? (
        <CssTextField
          select
          size="small"
          name={title}
          label={label}
          autoComplete="off"
          value={value || ""}
          onChange={onchange}
        >
          {dataSelect &&
            dataSelect.map((item, i) => (
              <MenuItem key={i} value={item}>
                {item}
              </MenuItem>
            ))}
        </CssTextField>
      ) : (
        <CssTextField
          size="small"
          name={title}
          label={label}
          autoComplete="off"
          value={value}
          onChange={onchange}
        />
      )}
      {touched && dataError && (
        <span style={{ color: "red", fontFamily: "Inter" }}>{dataError}</span>
      )}
      {isImageFailed !== undefined && (
        <span style={{ color: "red", fontFamily: "Inter" }}>
          {isImageFailed}
        </span>
      )}
    </Box>
  );
}

import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import { useDataPagination } from "@/src/Context/PageContexProvider";
// import { useRouter, usePathname } from "next/navigation";

export default function PaginationOutlined() {
  const { page, setPage } = useDataPagination();
  const handleOnChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleSetPage = () => {
    console.log("====================================");
    console.log(page);
    console.log("====================================");
  };

  React.useEffect(() => {
    handleSetPage();
  }, [page]);

  return (
    <Box
      sx={{
        float: "right",
        padding: "10px",
      }}
    >
      <Stack>
        <Pagination
          count={10}
          page={page}
          variant="outlined"
          color="secondary"
          onChange={handleOnChange}
        />
      </Stack>
    </Box>
  );
}

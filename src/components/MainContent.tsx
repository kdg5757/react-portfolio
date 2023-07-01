import { Box } from "@mui/material";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const MainContent: React.FC = () => {
  return (
    <Box
      sx={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '50px 0'
      }}
    >
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default MainContent;

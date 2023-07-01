import { Box } from "@mui/material";
import PageLink from "./PageLink";

import { RouteList } from "../constants/RoutePath";

const Gmenu: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTop: (theme) => `1px solid ${theme.palette.text.primary}`,
        borderBottom: (theme) => `1px solid ${theme.palette.text.primary}`,
        '.menu-link': {
          padding: ' 0 20px',
          lineHeight: '50px',
          textDecoration: 'none',
          color: (theme) => theme.palette.text.primary
        }
      }}
    >
      {RouteList.map((item) => <PageLink key={item.title} className="menu-link" href={item.path}>{item.title}</PageLink>)}
    </Box>
  );
};

export default Gmenu;

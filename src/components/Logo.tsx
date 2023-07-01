import { useTheme } from "@mui/material";
import { RoutePath } from "../constants/RoutePath";
import PageLink from "./PageLink";

type Props = Record<string, any>;

const Logo: React.FC<Props> = () => {
  const theme = useTheme();

  return (
    <PageLink
      href={RoutePath.TOP}
      sx={{
        display: 'block',
        textAlign: 'center',
        fontSize: '18px',
        fontWeight: 'bold',
        width: '120px',
        margin: '0 auto',
        textDecoration: 'none',
        color: theme.palette.text.primary
      }}
    >
      PORTFOLIO
    </PageLink>
  );
};

export default Logo;

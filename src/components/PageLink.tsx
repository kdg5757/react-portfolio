import { ReactNode } from "react";
import { Link, SxProps } from "@mui/material";
import { useNavigate } from "react-router";

type Props = {
  href: string;
  sx?: SxProps;
  children: ReactNode;
}

const PageLink: React.FC<Props> = ({href, children, sx}) => {
  const navigate = useNavigate();
  const handleMove = () => navigate(href);

  return <Link onClick={handleMove} sx={{
    cursor: 'pointer',
    ...sx
  }}>{children}</Link>
};

export default PageLink;

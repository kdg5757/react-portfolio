import { Box } from '@mui/material';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <Box
      sx={{
        padding: '10px'
      }}
    >
      <Logo />
    </Box>
  );
};

export default Header;

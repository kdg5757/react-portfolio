import { Box } from "@mui/material";

type Props = Record<string, never>;

const Footer: React.FC<Props> = () => {
    return (
        <Box
          component="p"
          sx={{
            textAlign: 'center',
            color: (theme) => theme.palette.common.white,
            background: (theme) => theme.palette.text.primary,
            padding: '10px',
            fontSize: '12px',
          }}
        >
          copyright (c) DONGGUN KIM PORTFOLIO all rights reserved.
        </Box>
    );
};

export default Footer;

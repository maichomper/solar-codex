import * as React from 'react';
import { AppBar, Toolbar, Box, Button } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="transparent" >
      <Toolbar>
        {/* Logo */}
        <Box sx={{ flexGrow: 1 }}>
          <img src="/path-to-your-logo.png" alt="The Solar Codex" height="50" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

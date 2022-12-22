import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

export default function Navbar() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor: "#272727"}} position="static">
        <Toolbar variant="dense">
          {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}> */}
          {/* <img
            src={BecknLogoIcon}
            alt={"BecknLogoIcon"}
            loading="lazy"
      /> */}
          {/* </IconButton> */}
        </Toolbar>
      </AppBar>
    // </Box>
  );
}
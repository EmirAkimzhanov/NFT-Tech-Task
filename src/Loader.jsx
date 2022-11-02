import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loader() {
  return (
    <Box sx={{  position:"absolute" , top:"50%" , left:'50%' , zIndex:"-1" , background:"transparent" }}>
      <CircularProgress sx={{color:"#3d85c6" }} />
    </Box>
  );
}

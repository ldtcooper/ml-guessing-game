import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Loading() {
    return (
        <Box sx={{
            display: 'flex',
            width: '100%',
            height: '95%',
            backgroundColor: 'grey',
            opacity: '50%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <CircularProgress sx={{ height: '20vh' }} />
        </Box>
    );
}

export default Loading;
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ padding: '5px' }}>
                <Typography align='left' component='p' variant='h6'>Modle: The ML Guessing Game</Typography>
            </AppBar>
        </Box >
    );
}

export default Header;
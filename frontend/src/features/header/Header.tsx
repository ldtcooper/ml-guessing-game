import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={
                {
                    padding: '5px',
                    display: 'grid',
                    gridTemplateColumns: '50vw 40vw 10vw',
                    gridTemplateRows: '100%'
                }
            }>
                <Typography align='left' component='p' variant='h6'>Modle: The ML Guessing Game</Typography>
                <Box sx={{ gridColumn: 3, display: 'flex', justifyContent: 'space-around' }}>
                    <a href="https://www.linkedin.com/in/ldtcooper/">
                        <LinkedInIcon sx={{ color: 'white' }} />
                        <span className='accessibility-text'>LinkedIn</span>
                    </a>
                    <a href="https://github.com/ldtcooper/ml-guessing-game/">
                        <GitHubIcon sx={{ color: 'white' }} />
                        <span className='accessibility-text'>GitHub</span>
                    </a>
                </Box>
            </AppBar>
        </Box >
    );
}

export default Header;